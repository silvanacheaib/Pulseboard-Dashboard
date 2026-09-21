import { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // stops the page from reloading (default browser behavior)

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    alert(`Signing in as ${email}... (we'll connect real auth later)`);
  }

  return (
    <div className="login-page">
      <div className="brand-panel">
        <div className="logo">
          <span className="logo-dot"></span>
          <span>Pulseboard</span>
        </div>

        <div className="pitch">
          <h1>All your revenue, users and growth — in one view.</h1>
          <p>Trusted by 400+ growing teams to track what matters, without the spreadsheet chaos.</p>
        </div>

        <div className="stats">
          <div>
            <strong>400+</strong>
            <span>Active teams</span>
          </div>
          <div>
            <strong>2.1M</strong>
            <span>Events tracked/day</span>
          </div>
          <div>
            <strong>99.9%</strong>
            <span>Uptime</span>
          </div>
        </div>
      </div>

      <div className="form-panel">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Welcome back</h2>
          <p className="subtitle">Log in to your Pulseboard workspace.</p>

          {error && <p className="form-error">{error}</p>}

          <label>Email</label>
          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>

          <p className="footer-link">Don't have an account? Sign up</p>
        </form>
      </div>
    </div>
  );
}

export default Login;