import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="bg-primary text-black shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wide">Job Tracker</div>

        <nav className="flex space-x-6 text-sm md:text-base">
          <Link to="/dashboard" className="hover:text-tertiary transition">
            Dashboard
          </Link>
          <Link to="/jobs" className="hover:text-tertiary transition">
            Jobs
          </Link>
        </nav>

        <button
          onClick={handleLogout}
          className="bg-tertiary hover:bg-secondary text-primary font-semibold py-2 px-4 rounded-lg transition"
        >
          Log Out
        </button>
      </div>
    </header>
  );
}

export default Header;