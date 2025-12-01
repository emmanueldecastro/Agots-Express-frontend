import {
  Calendar,
  Clock,
  Home,
  LogOut,
  MapPin,
  ShoppingBag,
  User,
  UtensilsCrossed,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "../ui/Avatar";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { ProvideOrderFeedback } from "../ui/ProvideOrderFeedback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState("orders");

  const myOrders = [
    {
      id: "#1234",
      date: "2024-12-18",
      items: "Adobo Combo, Sinigang",
      total: "₱850",
      status: "delivered",
    },
    {
      id: "#1189",
      date: "2024-12-15",
      items: "Lechon Kawali, Rice",
      total: "₱450",
      status: "preparing",
    },
    {
      id: "#1145",
      date: "2024-12-10",
      items: "Kare-Kare Set",
      total: "₱680",
      status: "on the way",
    },
  ];

  const myReservations = [
    {
      id: "R001",
      date: "2024-12-25",
      time: "7:00 PM",
      guests: 4,
      table: "T-12",
      status: "confirmed",
    },
    {
      id: "R002",
      date: "2024-12-30",
      time: "6:30 PM",
      guests: 2,
      table: "T-05",
      status: "confirmed",
    },
  ];

  const totalSpent = "₱1,980";

  const announcements = [
    "🎉 Christmas Special: 20% off for all orders above ₱1000!",
    "📢 New Menu Alert: Try our Cheesy Kare-Kare!",
    "🎁 Refer a friend and get 100 points added to your account.",
    "⏰ Happy Hour: 2 PM - 5 PM, enjoy free drinks with any meal!",
  ];

  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [announcements.length]);

  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "+63 912 345 6789",
    address: "123 Sample Street, Manila, Philippines",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#f5f5f5", color: "#1c2540" }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#1c2540",
          color: "#ffffff",
          borderBottom: "1px solid #1c254040",
        }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#f2c94c" }}
            >
              <UtensilsCrossed
                className="h-6 w-6"
                style={{ color: "#ffffff" }}
              />
            </div>
            <span className="text-2xl font-bold">Agot's Restaurant</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/order">
              <Button
                className="bg-transparent hover:bg-[#ffffff1a]"
                style={{ color: "#ffffff" }}
              >
                <UtensilsCrossed className="h-4 w-4 mr-2" />
                Order Now
              </Button>
            </Link>
            <Link to="/">
              <Button
                className="bg-transparent hover:bg-[#ffffff1a]"
                style={{ color: "#ffffff" }}
              >
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
            <Button
              className="bg-transparent hover:bg-[#ffffff1a]"
              style={{ color: "#ffffff" }}
              onClick={() => {
                localStorage.clear();
                window.location.href = "/";
              }}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Avatar
              className="h-16 w-16"
              style={{ backgroundColor: "#1c2540" }}
            >
              <AvatarFallback
                className="text-xl"
                style={{ backgroundColor: "#1c2540", color: "#ffffff" }}
              >
                JD
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold" style={{ color: "#1c2540" }}>
                Welcome back, John!
              </h1>
              <p style={{ color: "#7a7a7a" }}>
                Manage your orders, reservations, and profile
              </p>
            </div>
          </div>
          <Link to="/order">
            <Button
              className="text-[#1c2540]"
              style={{ backgroundColor: "#f2c94c" }}
              size="lg"
            >
              🍽️ Order Now
            </Button>
          </Link>
        </div>

        {/* Quick Stats & Announcements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm mb-1" style={{ color: "#7a7a7a" }}>
                  Total Orders
                </p>
                <p className="text-2xl font-bold" style={{ color: "#1c2540" }}>
                  24
                </p>
              </div>
              <div
                className="p-3 rounded-lg"
                style={{ backgroundColor: "#f2c94c1a" }}
              >
                <ShoppingBag className="h-6 w-6" style={{ color: "#f2c94c" }} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm mb-1" style={{ color: "#7a7a7a" }}>
                  Total Spent
                </p>
                <p className="text-2xl font-bold" style={{ color: "#1c2540" }}>
                  {totalSpent}
                </p>
              </div>
              <div
                className="p-3 rounded-lg"
                style={{ backgroundColor: "#3b4a6b1a" }}
              >
                <Calendar className="h-6 w-6" style={{ color: "#3b4a6b" }} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 h-full flex items-center justify-center text-center">
              <p className="text-sm animate-pulse" style={{ color: "#1c2540" }}>
                {announcements[currentAnnouncement]}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="w-full">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="orders">My Orders</TabsTrigger>
              <TabsTrigger value="reservations">Reservations</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            {/* Orders */}
            <TabsContent value="orders">
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <CardTitle>Order History</CardTitle>
                  <Link to="/order">
                    <Button
                      className="text-[#1c2540]"
                      style={{ backgroundColor: "#f2c94c" }}
                    >
                      New Order
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent className="space-y-4">
                  {myOrders.map((order) => (
                    <Card
                      key={order.id}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-6 flex justify-between">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <span
                              className="font-semibold text-lg"
                              style={{ color: "#1c2540" }}
                            >
                              {order.id}
                            </span>
                            <Badge
                              className="text-white"
                              style={{
                                backgroundColor:
                                  order.status === "delivered"
                                    ? "#2e7d32"
                                    : order.status === "cancelled"
                                    ? "#d32f2f"
                                    : "#fbc02d",
                              }}
                            >
                              {order.status}
                            </Badge>
                          </div>
                          <p style={{ color: "#7a7a7a" }}>{order.items}</p>
                          <div
                            className="flex items-center gap-4 text-sm"
                            style={{ color: "#7a7a7a" }}
                          >
                            <Clock className="h-4 w-4" />
                            {order.date}
                          </div>
                        </div>
                        <div className="text-right space-y-2">
                          <p
                            className="text-2xl font-bold"
                            style={{ color: "#f2c94c" }}
                          >
                            {order.total}
                          </p>
                          <div className="flex flex-col gap-2">
                            {["pending", "preparing", "on the way"].includes(
                              order.status.toLowerCase()
                            ) && (
                              <Button
                                size="sm"
                                variant="outline"
                                style={{
                                  borderColor: "#f2c94c",
                                  color: "#f2c94c",
                                }}
                              >
                                Track Order
                              </Button>
                            )}
                            <ProvideOrderFeedback orderId={order.id} />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reservations */}
            <TabsContent value="reservations">
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <CardTitle>My Reservations</CardTitle>
                  <Link to="/order">
                    <Button
                      className="text-[#1c2540]"
                      style={{ backgroundColor: "#f2c94c" }}
                    >
                      Order Food
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent className="space-y-4">
                  {myReservations.map((res) => (
                    <Card
                      key={res.id}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-6 flex justify-between">
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center gap-2">
                            <span
                              className="font-semibold text-lg"
                              style={{ color: "#1c2540" }}
                            >
                              {res.id}
                            </span>
                            <Badge
                              className="text-white"
                              style={{ backgroundColor: "#2e7d32" }}
                            >
                              {res.status}
                            </Badge>
                          </div>
                          <div
                            className="grid grid-cols-2 gap-3 text-sm"
                            style={{ color: "#7a7a7a" }}
                          >
                            <div className="flex items-center gap-2">
                              <Calendar
                                className="h-4 w-4"
                                style={{ color: "#f2c94c" }}
                              />
                              {res.date}
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock
                                className="h-4 w-4"
                                style={{ color: "#f2c94c" }}
                              />
                              {res.time}
                            </div>
                            <div className="flex items-center gap-2">
                              <User
                                className="h-4 w-4"
                                style={{ color: "#f2c94c" }}
                              />
                              {res.guests} guests
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin
                                className="h-4 w-4"
                                style={{ color: "#f2c94c" }}
                              />
                              Table {res.table}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            style={{ borderColor: "#f2c94c", color: "#f2c94c" }}
                          >
                            Modify
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            style={{ borderColor: "#f2c94c", color: "#f2c94c" }}
                          >
                            Cancel
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className="text-sm font-medium"
                        style={{ color: "#7a7a7a" }}
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={profile.firstName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        style={{ borderColor: "#dbe0e0", color: "#1c2540" }}
                      />
                    </div>
                    <div>
                      <label
                        className="text-sm font-medium"
                        style={{ color: "#7a7a7a" }}
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={profile.lastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        style={{ borderColor: "#dbe0e0", color: "#1c2540" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="text-sm font-medium"
                      style={{ color: "#7a7a7a" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg"
                      style={{ borderColor: "#dbe0e0", color: "#1c2540" }}
                    />
                  </div>

                  <div>
                    <label
                      className="text-sm font-medium"
                      style={{ color: "#7a7a7a" }}
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={profile.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg"
                      style={{ borderColor: "#dbe0e0", color: "#1c2540" }}
                    />
                  </div>

                  <div>
                    <label
                      className="text-sm font-medium"
                      style={{ color: "#7a7a7a" }}
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={profile.address}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg"
                      style={{ borderColor: "#dbe0e0", color: "#1c2540" }}
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      className="text-[#1c2540]"
                      style={{ backgroundColor: "#f2c94c" }}
                    >
                      Edit Profile
                    </Button>
                    <Button
                      variant="outline"
                      style={{ borderColor: "#f2c94c", color: "#f2c94c" }}
                    >
                      Change Password
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
