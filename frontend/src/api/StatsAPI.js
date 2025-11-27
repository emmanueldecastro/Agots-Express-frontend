import axios from "axios";

// Fetch stats including today's revenue
export const fetchStats = async () => {
  const res = await axios.get("http://localhost:5000/dashboard/stats");
  return res.data; // returns { totalOrders, totalCustomers, totalRevenue, todayRevenue, averageFeedback }
};

// Fetch recent orders
export const fetchRecentOrders = async () => {
  const res = await axios.get("http://localhost:5000/dashboard/recent-orders");
  return res.data;
};
