import { Link } from "react-router-dom";
export default function CustomerDashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Customer Dashboard</h1>
      <p>Welcome, Customer!</p>
      <Link to="/">Logout</Link>
    </div>
  );
}