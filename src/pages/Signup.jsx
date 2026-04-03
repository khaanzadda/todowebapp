import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../firebase/firebase';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      setIsSubmitting(true);
      await signup(email, password);
      navigate('/dashboard');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('An account already exists for this email.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Enter a valid email address.');
      } else {
        setError('Unable to create your account right now.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-10">
      <form onSubmit={handleSignup} className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Get Started</p>
        <h1 className="mb-2 text-3xl font-black text-gray-900">Create an Account</h1>
        <p className="mb-6 text-sm text-gray-500">Set up your Smart Todo workspace in less than a minute.</p>

        {error && <p className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>}

        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3 focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3 focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3 focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mb-6 w-full rounded-lg border p-3 focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
        >
          {isSubmitting ? 'Creating account...' : `Create Account${name ? `, ${name.split(' ')[0]}` : ''}`}
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-blue-600">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
