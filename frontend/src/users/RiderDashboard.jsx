import { Link } from "react-router-dom";
export default function RiderDashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Rider Dashboard</h1>
      <p>Welcome, Rider!</p>
      <Link to="/">Logout</Link>
    </div>
  );
}