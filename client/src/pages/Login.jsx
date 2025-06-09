import { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('登录失败，请检查账号密码');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>登录</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="邮箱" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="密码" required />
      <button type="submit">登录</button>
    </form>
  );
}

export default Login;