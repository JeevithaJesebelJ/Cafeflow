import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Booking from "./pages/Booking";
import Cart from "./pages/Cart";
import OrderStatus from "./pages/OrderStatus";

import StaffOrders from "./pages/StaffOrders";
import StaffBookings from "./pages/StaffBookings";
import StaffDashboard from "./pages/StaffDashboard";
import StaffManagement from "./pages/StaffManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Customer */}
        <Route path="/" element={<Home />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/cart" element={<Cart />} />

        <Route
          path="/order-status"
          element={<OrderStatus />}
        />

        {/* Staff */}
        <Route
          path="/staff"
          element={<StaffDashboard />}
        />

        <Route
          path="/staff/orders"
          element={<StaffOrders />}
        />

        <Route
          path="/staff/bookings"
          element={<StaffBookings />}
        />

        <Route
          path="/staff/management"
          element={<StaffManagement />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;