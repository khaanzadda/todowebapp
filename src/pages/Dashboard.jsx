import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase';
import { collection, addDoc, query, orderBy, onSnapshot, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { Trash2, Plus } from 'lucide-react';
const Dashboard = ({ user }) => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'users', user.uid, 'todos'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, [user.uid]);

  const addTodo = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    await addDoc(collection(db, 'users', user.uid, 'todos'), {
      title: input,
      completed: false,
      createdAt: serverTimestamp()
    });
    setInput('');
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'users', user.uid, 'todos', todo.id), {
      completed: !todo.completed
    });
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'users', user.uid, 'todos', id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, {user.email.split('@')[0]}</h1>
        <p className="text-gray-500">Manage your tasks efficiently.</p>
      </header>

      <form onSubmit={addTodo} className="flex gap-2 mb-8">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="What needs to be done?"
        />
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Add</button>
      </form>

      <div className="space-y-3">
        {todos.length === 0 && <p className="text-center text-gray-400 py-10">No todos yet. Relax!</p>}
        {todos.map(todo => (
          <div key={todo.id} className="flex items-center justify-between p-4 bg-white border rounded-xl shadow-sm">
            <div className="flex items-center gap-3">
              <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => toggleComplete(todo)}
                className="w-5 h-5 cursor-pointer"
              />
              <span className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'} font-medium`}>
                {todo.title}
              </span>
            </div>
            <button onClick={() => deleteTodo(todo.id)} className="text-red-400 hover:text-red-600">
              Delete
            </button>

            // Swap the "Add" button for:
<button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
  <Plus size={24} />
</button>

// Swap the "Delete" button for:
<button onClick={() => deleteTodo(todo.id)} className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-lg transition">
  <Trash2 size={20} />
</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;