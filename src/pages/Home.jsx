import { Link } from 'react-router-dom';

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4">
    <h1 className="text-6xl font-black text-gray-900 mb-6">
      Organize your life <br /> <span className="text-blue-600">in one click.</span>
    </h1>
    <p className="text-xl text-gray-500 max-w-2xl mb-10">
      The professional task manager designed for speed and simplicity. 
      Sync your todos across all devices with real-time Firebase integration.
    </p>
    <div className="flex gap-4">
      <Link to="/signup" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-lg transition">Get Started Free</Link>
      <Link to="/login" className="bg-white border px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition">View Demo</Link>
    </div>
  </div>
);

export default Home;