import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Admin Dashboard</h1>

      <p>Welcome, Admin!</p>

      <Link to="/">Logout</Link>
    </div>
  );
}
