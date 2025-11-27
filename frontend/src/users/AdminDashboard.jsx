import axios from "axios";
import { MessageSquare, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { DashboardHeader } from "../ui/DashboardHeader";
import { DashboardSidebar } from "../ui/DashboardSidebar";
import { OrdersChart } from "../ui/OrdersChart";
import { RecentOrders } from "../ui/RecentOrders";
import { SalesChart } from "../ui/SalesChart";
import { StatsCard } from "../ui/StatsCard";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalCustomers: 0,
    totalRevenue: 0,
    todayRevenue: 0,
    averageFeedback: 0,
  });

  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const statsRes = await axios.get("http://localhost:5000/dashboard/stats");
        setStats(statsRes.data);

        const ordersRes = await axios.get("http://localhost:5000/dashboard/recent-orders");
        setRecentOrders(ordersRes.data || []);
      } catch (err) {
        console.error("Failed to load dashboard data:", err);
      }
    };
    loadDashboard();
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F6F9]">
      <DashboardSidebar />
      <div className="pl-64 transition-all duration-300">
        <DashboardHeader />
        <main className="p-6 space-y-6">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">
              Dashboard Overview
            </h1>
            <p className="text-gray-500">
              Welcome back! Here's what's happening today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Orders"
              value={stats.totalOrders}
              change="+12% from yesterday"
              changeType="positive"
              icon={ShoppingCart}
              iconColor="bg-yellow-400"
            />
            <StatsCard
              title="Customers"
              value={stats.totalCustomers}
              change="+8% from last week"
              changeType="positive"
              icon={Users}
              iconColor="bg-blue-400"
            />
            <StatsCard
              title="Revenue Today"
              value={`₱${stats.todayRevenue || 0}`}
              change="+23% from yesterday"
              changeType="positive"
              icon={TrendingUp}
              iconColor="bg-green-500"
            />
            <StatsCard
              title="Feedback"
              value={stats.averageFeedback}
              change="96% satisfaction"
              changeType="neutral"
              icon={MessageSquare}
              iconColor="bg-orange-400"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SalesChart />
            <OrdersChart />
          </div>

          <RecentOrders orders={recentOrders} />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
