import { useEffect, useState } from 'react';
import { collection, addDoc, deleteDoc, doc, onSnapshot, serverTimestamp, updateDoc } from 'firebase/firestore';
import { CalendarDays, Pencil, Plus, Save, Trash2, X } from 'lucide-react';
import { db } from '../firebase/firebase';

const priorityOptions = [
  { value: 'low', label: 'Low', chipClass: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { value: 'medium', label: 'Medium', chipClass: 'bg-amber-50 text-amber-700 border-amber-200' },
  { value: 'high', label: 'High', chipClass: 'bg-rose-50 text-rose-700 border-rose-200' },
];

const defaultForm = {
  title: '',
  description: '',
  priority: 'medium',
  dueDate: '',
};

const formatDueDate = (dueDate) => {
  if (!dueDate) {
    return 'No due date';
  }

  const parsed = new Date(`${dueDate}T00:00:00`);

  if (Number.isNaN(parsed.getTime())) {
    return dueDate;
  }

  return parsed.toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

const getPriorityMeta = (priority) =>
  priorityOptions.find((option) => option.value === priority) ?? priorityOptions[1];

const Dashboard = ({ user }) => {
  const [form, setForm] = useState(defaultForm);
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState(defaultForm);

  useEffect(() => {
    const todosCollection = collection(db, 'users', user.uid, 'todos');
    const unsubscribe = onSnapshot(
      todosCollection,
      (snapshot) => {
        const nextTodos = snapshot.docs
          .map((entry) => ({ id: entry.id, ...entry.data() }))
          .sort((a, b) => {
            const completedDelta = Number(a.completed) - Number(b.completed);

            if (completedDelta !== 0) {
              return completedDelta;
            }

            const priorityWeight = { high: 0, medium: 1, low: 2 };
            const priorityDelta = (priorityWeight[a.priority] ?? 1) - (priorityWeight[b.priority] ?? 1);

            if (priorityDelta !== 0) {
              return priorityDelta;
            }

            const aTime = a.createdAt?.seconds ?? 0;
            const bTime = b.createdAt?.seconds ?? 0;
            return bTime - aTime;
          });

        setTodos(nextTodos);
        setError('');
      },
      (err) => {
        console.error('Failed to load todos:', err);
        setError(err.message || 'Tasks could not be loaded. Check your Firebase rules and config.');
      }
    );

    return unsubscribe;
  }, [user.uid]);

  const updateCreateForm = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const updateEditForm = (field, value) => {
    setEditForm((current) => ({ ...current, [field]: value }));
  };

  const resetCreateForm = () => {
    setForm(defaultForm);
  };

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditForm({
      title: todo.title ?? '',
      description: todo.description ?? '',
      priority: todo.priority ?? 'medium',
      dueDate: todo.dueDate ?? '',
    });
    setError('');
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditForm(defaultForm);
  };

  const addTodo = async (e) => {
    e.preventDefault();
    const title = form.title.trim();

    if (!title || isAdding) {
      return;
    }

    try {
      setIsAdding(true);
      setError('');
      await addDoc(collection(db, 'users', user.uid, 'todos'), {
        title,
        description: form.description.trim(),
        priority: form.priority,
        dueDate: form.dueDate || null,
        completed: false,
        createdAt: serverTimestamp(),
      });
      resetCreateForm();
    } catch (err) {
      console.error('Failed to add todo:', err);
      setError(err.message || 'Task could not be added. If Firebase is connected, check Firestore rules.');
    } finally {
      setIsAdding(false);
    }
  };

  const saveTodo = async (id) => {
    const title = editForm.title.trim();

    if (!title) {
      setError('Task title cannot be empty.');
      return;
    }

    try {
      setError('');
      await updateDoc(doc(db, 'users', user.uid, 'todos', id), {
        title,
        description: editForm.description.trim(),
        priority: editForm.priority,
        dueDate: editForm.dueDate || null,
      });
      cancelEditing();
    } catch (err) {
      console.error('Failed to save todo:', err);
      setError(err.message || 'Task could not be updated.');
    }
  };

  const toggleComplete = async (todo) => {
    try {
      setError('');
      await updateDoc(doc(db, 'users', user.uid, 'todos', todo.id), {
        completed: !todo.completed,
      });
    } catch (err) {
      console.error('Failed to update todo:', err);
      setError(err.message || 'Task status could not be updated.');
    }
  };

  const updatePriority = async (todo, priority) => {
    try {
      setError('');
      await updateDoc(doc(db, 'users', user.uid, 'todos', todo.id), {
        priority,
      });
    } catch (err) {
      console.error('Failed to update priority:', err);
      setError(err.message || 'Task priority could not be updated.');
    }
  };

  const deleteTodo = async (id) => {
    try {
      setError('');
      await deleteDoc(doc(db, 'users', user.uid, 'todos', id));
    } catch (err) {
      console.error('Failed to delete todo:', err);
      setError(err.message || 'Task could not be deleted.');
    }
  };

  return (
    <div className="mx-auto max-w-5xl p-6">
      <header className="mb-8 flex flex-col gap-2">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Dashboard</p>
        <h1 className="text-3xl font-black text-gray-900">Welcome, {user.email.split('@')[0]}</h1>
        <p className="text-gray-500">Create tasks, set priorities, and keep deadlines visible.</p>
      </header>

      {error && <p className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>}

      <form onSubmit={addTodo} className="mb-8 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="grid gap-3 md:grid-cols-[1.5fr_1fr_0.8fr_1fr_auto]">
          <input
            type="text"
            value={form.title}
            onChange={(e) => updateCreateForm('title', e.target.value)}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            placeholder="Add a task title"
          />
          <input
            type="text"
            value={form.description}
            onChange={(e) => updateCreateForm('description', e.target.value)}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            placeholder="Short description"
          />
          <select
            value={form.priority}
            onChange={(e) => updateCreateForm('priority', e.target.value)}
            className="rounded-xl border border-gray-200 px-4 py-3 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          >
            {priorityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label} priority
              </option>
            ))}
          </select>
          <input
            type="date"
            value={form.dueDate}
            onChange={(e) => updateCreateForm('dueDate', e.target.value)}
            className="rounded-xl border border-gray-200 px-4 py-3 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
          <button
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
            type="submit"
            disabled={isAdding}
            aria-label="Add task"
          >
            <Plus size={20} />
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {todos.length === 0 && <p className="rounded-2xl border border-dashed border-gray-300 py-12 text-center text-gray-400">No tasks yet.</p>}

        {todos.map((todo) => {
          const priority = getPriorityMeta(todo.priority);
          const isEditing = editingId === todo.id;

          return (
            <article key={todo.id} className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
              {isEditing ? (
                <div className="grid gap-3 md:grid-cols-[1.3fr_1fr_0.8fr_1fr_auto]">
                  <input
                    type="text"
                    value={editForm.title}
                    onChange={(e) => updateEditForm('title', e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                  <input
                    type="text"
                    value={editForm.description}
                    onChange={(e) => updateEditForm('description', e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="Short description"
                  />
                  <select
                    value={editForm.priority}
                    onChange={(e) => updateEditForm('priority', e.target.value)}
                    className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  >
                    {priorityOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label} priority
                      </option>
                    ))}
                  </select>
                  <input
                    type="date"
                    value={editForm.dueDate}
                    onChange={(e) => updateEditForm('dueDate', e.target.value)}
                    className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => saveTodo(todo.id)}
                      className="inline-flex items-center justify-center rounded-xl bg-gray-900 p-3 text-white transition hover:bg-gray-700"
                      aria-label="Save task"
                    >
                      <Save size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={cancelEditing}
                      className="inline-flex items-center justify-center rounded-xl border border-gray-200 p-3 text-gray-500 transition hover:bg-gray-50"
                      aria-label="Cancel editing"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-4">
                    <input
                      type="checkbox"
                      checked={Boolean(todo.completed)}
                      onChange={() => toggleComplete(todo)}
                      className="mt-1 h-5 w-5 cursor-pointer"
                    />
                    <div className="space-y-2">
                      <p className={`text-lg font-semibold ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                        {todo.title}
                      </p>
                      {todo.description ? (
                        <p className={`max-w-2xl text-sm ${todo.completed ? 'text-gray-400' : 'text-gray-500'}`}>
                          {todo.description}
                        </p>
                      ) : null}
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className={`rounded-full border px-3 py-1 font-semibold ${priority.chipClass}`}>{priority.label}</span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-slate-600">
                          <CalendarDays size={15} />
                          {formatDueDate(todo.dueDate)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <select
                      value={todo.priority ?? 'medium'}
                      onChange={(e) => updatePriority(todo, e.target.value)}
                      className="rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    >
                      {priorityOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => startEditing(todo)}
                      className="inline-flex items-center justify-center rounded-xl border border-gray-200 p-3 text-gray-600 transition hover:bg-gray-50"
                      aria-label="Edit task"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteTodo(todo.id)}
                      className="inline-flex items-center justify-center rounded-xl border border-red-100 p-3 text-red-500 transition hover:bg-red-50"
                      aria-label="Delete task"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
