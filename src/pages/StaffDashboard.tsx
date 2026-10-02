import StaffNavbar from "../components/StaffNavbar";
import { useEffect, useState } from "react";
import {
  ShoppingBag,
  CalendarDays,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import { getOrders } from "../data/orderStorage";
import { getBookings } from "../data/bookingStorage";
import { getStaff } from "../data/staffStorage";

function StaffDashboard() {
  const [orderCount, setOrderCount] = useState(0);
  const [bookingCount, setBookingCount] = useState(0);
  const [staffCount, setStaffCount] = useState(0);

  useEffect(() => {
    const orders = getOrders();
    const bookings = getBookings();
    const staff = getStaff();

    setOrderCount(orders.length);

    setBookingCount(
      bookings.filter(
        (booking) => booking.status !== "Cancelled"
      ).length
    );

    setStaffCount(
      staff.filter(
        (member) => member.active
      ).length
    );
  }, []);

    return (
    <>
    <StaffNavbar />

    <main className="min-h-screen bg-[#F6F1E8] text-[#3D392F]">
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16 lg:py-16">

        {/* Header */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#71856A]">
            CaféFlow · Staff
          </p>

          <h1 className="mt-3 font-serif text-5xl tracking-tight sm:text-6xl">
            Staff Dashboard
          </h1>

          <p className="mt-4 max-w-2xl text-[#6A655B]">
            A simple overview of CaféFlow&apos;s day-to-day
            operations.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {/* Orders */}
          <Link
            to="/staff/orders"
            className="group rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1] p-7 transition hover:-translate-y-1 hover:border-[#AEBFA6]"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DCE8D7]">
                <ShoppingBag
                  size={22}
                  className="text-[#53664D]"
                />
              </div>

              <ArrowRight
                size={20}
                className="text-[#817A6E] transition group-hover:translate-x-1"
              />
            </div>

            <p className="mt-7 text-sm text-[#817A6E]">
              Orders received
            </p>

            <p className="mt-1 font-serif text-5xl">
              {orderCount}
            </p>

            <p className="mt-3 text-sm font-medium text-[#53664D]">
              View orders
            </p>
          </Link>

          {/* Bookings */}
          <Link
            to="/staff/bookings"
            className="group rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1] p-7 transition hover:-translate-y-1 hover:border-[#AEBFA6]"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8E4DA]">
                <CalendarDays
                  size={22}
                  className="text-[#71856A]"
                />
              </div>

              <ArrowRight
                size={20}
                className="text-[#817A6E] transition group-hover:translate-x-1"
              />
            </div>

            <p className="mt-7 text-sm text-[#817A6E]">
              Active bookings
            </p>

            <p className="mt-1 font-serif text-5xl">
              {bookingCount}
            </p>

            <p className="mt-3 text-sm font-medium text-[#53664D]">
              View bookings
            </p>
          </Link>

          {/* Staff */}
          <Link
            to="/staff/management"
            className="group rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1] p-7 transition hover:-translate-y-1 hover:border-[#AEBFA6]"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8E4DA]">
                <Users
                  size={22}
                  className="text-[#71856A]"
                />
              </div>

              <ArrowRight
                size={20}
                className="text-[#817A6E] transition group-hover:translate-x-1"
              />
            </div>

            <p className="mt-7 text-sm text-[#817A6E]">
              Active staff
            </p>

            <p className="mt-1 font-serif text-5xl">
              {staffCount}
            </p>

            <p className="mt-3 text-sm font-medium text-[#53664D]">
              Manage staff
            </p>
          </Link>

        </div>

        {/* Operations */}
        <section className="mt-12">

          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#71856A]">
            Operations
          </p>

          <h2 className="mt-2 font-serif text-3xl">
            Quick access
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            {/* Orders */}
            <Link
              to="/staff/orders"
              className="flex items-center justify-between rounded-2xl border border-[#D8D0C1] bg-[#FBF8F1] p-5 transition hover:bg-[#F0EBE2]"
            >
              <div className="flex items-center gap-4">
                <ShoppingBag
                  size={20}
                  className="text-[#53664D]"
                />

                <span className="font-medium">
                  Manage Orders
                </span>
              </div>

              <ArrowRight size={18} />
            </Link>

            {/* Bookings */}
            <Link
              to="/staff/bookings"
              className="flex items-center justify-between rounded-2xl border border-[#D8D0C1] bg-[#FBF8F1] p-5 transition hover:bg-[#F0EBE2]"
            >
              <div className="flex items-center gap-4">
                <CalendarDays
                  size={20}
                  className="text-[#53664D]"
                />

                <span className="font-medium">
                  Manage Bookings
                </span>
              </div>

              <ArrowRight size={18} />
            </Link>

            {/* Staff */}
            <Link
              to="/staff/management"
              className="flex items-center justify-between rounded-2xl border border-[#D8D0C1] bg-[#FBF8F1] p-5 transition hover:bg-[#F0EBE2]"
            >
              <div className="flex items-center gap-4">
                <Users
                  size={20}
                  className="text-[#53664D]"
                />

                <span className="font-medium">
                  Manage Staff
                </span>
              </div>

              <ArrowRight size={18} />
            </Link>

          </div>
        </section>

      </section>
    </main>
    </>
  );
}

export default StaffDashboard;

