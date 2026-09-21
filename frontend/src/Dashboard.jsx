import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css';

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/get_transactions.php`)
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Could not load data. Is the PHP server running?');
        setLoading(false);
      });
  }, []);

  const totalRevenue = transactions
    .filter((t) => t.status === 'Completed')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0);

  return (
    <div className="app-shell">
      <Sidebar active="Dashboard" />

      <div className="main">
        <div className="topbar">
          <input className="search" placeholder="Search metrics, reports..." />
          <div className="topbar-right">
            <div className="date-chip">Sep 1 – Sep 21, 2026</div>
            <div className="avatar"></div>
          </div>
        </div>

        <div className="body">
          <div className="title-row">
            <div>
              <h1>Dashboard Overview</h1>
              <p>Here's how your business is performing this month.</p>
              {error && <p style={{ color: '#dc2626', fontSize: 14 }}>{error}</p>}
            </div>
            <button className="export-btn">Export Report</button>
          </div>

          <div className="kpi-row">
            <div className="kpi-card">
              <span className="kpi-label">Total Revenue</span>
              <span className="kpi-value">
                {loading ? '...' : `$${totalRevenue.toLocaleString()}`}
              </span>
              <span className="kpi-delta up">+12.4% ↑ vs last month</span>
            </div>
            <div className="kpi-card">
              <span className="kpi-label">Active Users</span>
              <span className="kpi-value">12,904</span>
              <span className="kpi-delta up">+5.1% ↑ vs last month</span>
            </div>
            <div className="kpi-card">
              <span className="kpi-label">Conversion Rate</span>
              <span className="kpi-value">3.42%</span>
              <span className="kpi-delta up">+0.8% ↑ vs last month</span>
            </div>
            <div className="kpi-card">
              <span className="kpi-label">Churn Rate</span>
              <span className="kpi-value">1.9%</span>
              <span className="kpi-delta down">-0.3% ↓ vs last month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;