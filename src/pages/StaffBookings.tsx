import StaffNavbar from "../components/StaffNavbar";
import { useEffect, useState } from "react";
import {
  CalendarDays,
  Clock3,
  Users,
  Check,
  X,
} from "lucide-react";

import {
  getBookings,
  updateBookingStatus,
  type Booking,
} from "../data/bookingStorage";

function StaffBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const loadBookings = () => {
    setBookings(getBookings());
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const handleStatusChange = (
    bookingId: string,
    status: Booking["status"]
  ) => {
    updateBookingStatus(bookingId, status);
    loadBookings();
  };

    return (
    <>
    <StaffNavbar />

    <main className="min-h-screen bg-[#F6F1E8] text-[#3D392F]">
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16">
        {/* Header */}
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#71856A]">
            CaféFlow · Staff
          </p>

          <h1 className="mt-3 font-serif text-5xl tracking-tight">
            Bookings Received
          </h1>

          <p className="mt-4 max-w-2xl text-[#6A655B]">
            View and manage reservations for CaféFlow's
            work-friendly seating.
          </p>
        </div>

        {/* Summary */}
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#D8D0C1] bg-[#FBF8F1] p-6">
            <p className="text-sm text-[#817A6E]">
              Total bookings
            </p>

            <p className="mt-2 font-serif text-4xl">
              {bookings.length}
            </p>
          </div>

          <div className="rounded-2xl border border-[#D8D0C1] bg-[#FBF8F1] p-6">
            <p className="text-sm text-[#817A6E]">
              Confirmed
            </p>

            <p className="mt-2 font-serif text-4xl text-[#53664D]">
              {
                bookings.filter(
                  (booking) => booking.status === "Confirmed"
                ).length
              }
            </p>
          </div>

          <div className="rounded-2xl border border-[#D8D0C1] bg-[#FBF8F1] p-6">
            <p className="text-sm text-[#817A6E]">
              Cancelled
            </p>

            <p className="mt-2 font-serif text-4xl">
              {
                bookings.filter(
                  (booking) => booking.status === "Cancelled"
                ).length
              }
            </p>
          </div>
        </div>

        {/* Bookings */}
        <div className="mt-10">
          {bookings.length === 0 ? (
            <div className="rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1] p-12 text-center">
              <CalendarDays
                size={36}
                className="mx-auto text-[#71856A]"
              />

              <h2 className="mt-5 font-serif text-2xl">
                No bookings yet
              </h2>

              <p className="mt-2 text-[#6A655B]">
                New work-friendly seating reservations will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {bookings.map((booking) => (
                <article
                  key={booking.id}
                  className="rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1] p-6"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    {/* Customer */}
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="font-serif text-2xl">
                          {booking.name}
                        </h2>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            booking.status === "Confirmed"
                              ? "bg-[#DCE8D7] text-[#53664D]"
                              : "bg-[#E7E1D8] text-[#756E62]"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-[#817A6E]">
                        {booking.phone}
                      </p>

                      <p className="mt-1 text-xs text-[#A09A8F]">
                        Booking ID: {booking.id}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="grid gap-4 sm:grid-cols-4">
                      <div>
                        <p className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#817A6E]">
                          <CalendarDays size={14} />
                          Date
                        </p>

                        <p className="mt-1 text-sm font-medium">
                          {booking.date}
                        </p>
                      </div>

                      <div>
                        <p className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#817A6E]">
                          <Clock3 size={14} />
                          Time
                        </p>

                        <p className="mt-1 text-sm font-medium">
                          {booking.time}
                        </p>
                      </div>

                      <div>
                        <p className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#817A6E]">
                          <Users size={14} />
                          Guests
                        </p>

                        <p className="mt-1 text-sm font-medium">
                          {booking.guests}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#817A6E]">
                          Table
                        </p>

                        <p className="mt-1 text-sm font-medium">
                          {booking.table}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      {booking.status !== "Confirmed" && (
                        <button
                          type="button"
                          onClick={() =>
                            handleStatusChange(
                              booking.id,
                              "Confirmed"
                            )
                          }
                          className="flex items-center gap-2 rounded-full bg-[#53664D] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#42533D]"
                        >
                          <Check size={16} />
                          Confirm
                        </button>
                      )}

                      {booking.status !== "Cancelled" && (
                        <button
                          type="button"
                          onClick={() =>
                            handleStatusChange(
                              booking.id,
                              "Cancelled"
                            )
                          }
                          className="flex items-center gap-2 rounded-full border border-[#D8D0C1] px-5 py-2.5 text-sm font-semibold text-[#6A655B] transition hover:bg-[#F0EBE2]"
                        >
                          <X size={16} />
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
    </>    
  );
}

export default StaffBookings;