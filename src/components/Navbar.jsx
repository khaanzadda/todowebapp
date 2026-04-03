import { Link } from 'react-router-dom';

function Navbar({ user }) {
  return (
    <header className="border-b bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-black tracking-tight text-gray-900">
          TodoWebApp
        </Link>

        <div className="flex items-center gap-3 text-sm font-semibold">
          {user ? (
            <>
              <Link to="/dashboard" className="rounded-full px-4 py-2 text-gray-700 transition hover:bg-gray-100">
                Dashboard
              </Link>
              <span className="hidden text-gray-500 sm:inline">{user.email}</span>
            </>
          ) : (
            <>
              <Link to="/login" className="rounded-full px-4 py-2 text-gray-700 transition hover:bg-gray-100">
                Login
              </Link>
              <Link
                to="/signup"
                className="rounded-full bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
