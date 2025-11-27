import { Link } from "react-router-dom";
export default function StaffDashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Staff Dashboard</h1>
      <p>Welcome, Staff!</p>
      <Link to="/">Logout</Link>
    </div>
  );
}
