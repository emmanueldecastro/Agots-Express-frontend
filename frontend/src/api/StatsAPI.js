import axios from "axios";

// Fetch stats including today's revenue and comparison values
export const fetchStats = async () => {
  try {
    const res = await axios.get("http://localhost:5000/dashboard/stats");

    // Backend now returns:
    // {
    //   totalOrders,
    //   totalOrdersPrevious,
    //   totalCustomers,
    //   totalCustomersPrevious,
    //   todayRevenue,
    //   revenuePrevious,
    //   averageFeedback,
    //   feedbackPrevious
    // }

    return res.data;
  } catch (err) {
    console.error("Failed to fetch stats:", err);
    return {
      totalOrders: 0,
      totalOrdersPrevious: 0,
      totalCustomers: 0,
      totalCustomersPrevious: 0,
      todayRevenue: 0,
      revenuePrevious: 0,
      averageFeedback: 0,
      feedbackPrevious: 0,
    };
  }
};

// Fetch recent orders
export const fetchRecentOrders = async () => {
  try {
    const res = await axios.get(
      "http://localhost:5000/dashboard/recent-orders"
    );
    return res.data || [];
  } catch (err) {
    console.error("Failed to fetch recent orders:", err);
    return [];
  }
};
