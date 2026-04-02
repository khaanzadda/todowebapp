import { useState } from 'react';
import { login } from '../firebase/firebase';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      setError("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <form onSubmit={handleLogin} className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Smart Todo</h2>
        {error && <p className="text-red-500 mb-4 text-center text-sm">{error}</p>}
        <input 
          type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setEmail(e.target.value)} required
        />
        <input 
          type="password" placeholder="Password" className="w-full p-3 mb-6 border rounded-lg focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setPassword(e.target.value)} required
        />
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Sign In
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          New here? <Link to="/signup" className="text-blue-600 font-bold">Create account</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;