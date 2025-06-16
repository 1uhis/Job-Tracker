import { useState } from 'react';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/register', { name, email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/login');
    } catch (err) {
      alert('Registration failed：' + (err.response?.data?.msg || 'Please try again.'));
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-100 via-blue-100 to-purple-100">
      <div className="bg-white/90 shadow-2xl rounded-3xl p-10 w-full max-w-lg border border-blue-100 backdrop-blur-md">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-green-400 rounded-full p-4 mb-4 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-green-700 mb-2">Create Account</h2>
          <p className="text-gray-500">Sign up to get started</p>
        </div>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-50"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 text-white font-bold py-3 rounded-xl shadow-lg transition"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Job Tracker. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Register;