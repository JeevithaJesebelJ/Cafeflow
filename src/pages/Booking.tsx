import { useState, type FormEvent } from "react";
import {
  CalendarDays,
  Clock3,
  Users,
  Check,
  ArrowLeft,
} from "lucide-react";
import { saveBooking, type Booking as BookingData } from "../data/bookingStorage";

const tables = [
  { id: "W01", seats: 1, position: "top" },
  { id: "W02", seats: 2, position: "top" },
  { id: "W03", seats: 2, position: "bottom" },
  { id: "W04", seats: 4, position: "bottom" },
];

function Booking() {
  const [selectedTable, setSelectedTable] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("2 hours");
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const selectedTableData = tables.find(
    (table) => table.id === selectedTable
  );

  const maxGuests = selectedTableData?.seats ?? 4;

  const handleBooking = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (!selectedTable || !date || !time || !name || !phone) {
    alert("Please complete all required fields.");
    return;
  }

  const newBooking: BookingData = { 
    id: `BL-${Date.now()}`,
    name,
    phone,
    date,
    time,
    duration,
    guests,
    table: selectedTable,
    status: "Confirmed",
    createdAt: new Date().toISOString(),
  };

  saveBooking(newBooking);

  setConfirmed(true);
};

  /*
   * CONFIRMATION SCREEN
   */
  if (confirmed) {
    return (
      <main className="min-h-screen bg-[#F6F1E8] px-6 py-16 text-[#3D392F]">
        <div className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center">
          <div className="w-full rounded-[2rem] border border-[#D8D0C1] bg-[#FBF8F1] p-8 text-center sm:p-12">
            {/* Success icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DCE8D7] text-[#53664D]">
              <Check size={30} />
            </div>

            {/* Brand */}
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-[#71856A]">
              CaféFlow · Jayanagar
            </p>

            {/* Heading */}
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
              Your table is reserved.
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-md leading-7 text-[#6A655B]">
              We've reserved a work-friendly table for you. You can arrive,
              settle in and get started without worrying about peak-hour
              availability.
            </p>

            {/* Booking details */}
            <div className="mt-8 rounded-2xl bg-[#EEF2E9] p-6 text-left">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#817A6E]">
                    Name
                  </p>
                  <p className="mt-1 font-medium">{name}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#817A6E]">
                    Table
                  </p>
                  <p className="mt-1 font-medium">{selectedTable}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#817A6E]">
                    Date
                  </p>
                  <p className="mt-1 font-medium">{date}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#817A6E]">
                    Arrival
                  </p>
                  <p className="mt-1 font-medium">{time}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#817A6E]">
                    Duration
                  </p>
                  <p className="mt-1 font-medium">{duration}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#817A6E]">
                    Guests
                  </p>
                  <p className="mt-1 font-medium">{guests}</p>
                </div>
              </div>
            </div>

            {/* New booking */}
            <button
              type="button"
              onClick={() => {
                setConfirmed(false);
                setSelectedTable("");
                setDate("");
                setTime("");
                setDuration("2 hours");
                setGuests(1);
                setName("");
                setPhone("");
              }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#53664D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#42533D]"
            >
              <ArrowLeft size={17} />
              Make another booking
            </button>
          </div>
        </div>
      </main>
    );
  }

  /*
   * BOOKING FORM
   */
  return (
    <main className="min-h-screen bg-[#F6F1E8] text-[#3D392F]">
      <section className="mx-auto max-w-6xl px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#71856A]">
            CaféFlow · Jayanagar
          </p>

          <h1 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl">
            Make space for your work.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#6A655B]">
            Reserve a designated work-friendly table before you arrive and
            settle in without worrying about peak-hour availability.
          </p>
        </div>

        {/* Main booking layout */}
        <form
          onSubmit={handleBooking}
          className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.15fr]"
        >
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Date & Time */}
            <section className="rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1] p-6">
              <h2 className="font-serif text-2xl">
                When are you coming?
              </h2>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {/* Date */}
                <label className="block">
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <CalendarDays size={17} />
                    Date
                  </span>

                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#D8D0C1] bg-white px-4 py-3 outline-none focus:border-[#8FA487]"
                    required
                  />
                </label>

                {/* Time */}
                <label className="block">
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <Clock3 size={17} />
                    Arrival
                  </span>

                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#D8D0C1] bg-white px-4 py-3 outline-none focus:border-[#8FA487]"
                    required
                  >
                    <option value="">Select time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="9:30 AM">9:30 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="2:30 PM">2:30 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                  </select>
                </label>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {/* Duration */}
                <label className="block">
                  <span className="text-sm font-medium">
                    Duration
                  </span>

                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#D8D0C1] bg-white px-4 py-3 outline-none focus:border-[#8FA487]"
                  >
                    <option value="1 hour">1 hour</option>
                    <option value="2 hours">2 hours</option>
                    <option value="3 hours">3 hours</option>
                    <option value="4 hours">4 hours</option>
                  </select>
                </label>

                {/* Guests */}
                <div>
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <Users size={17} />
                    Guests
                  </span>

                  <div className="mt-2 flex items-center justify-between rounded-xl border border-[#D8D0C1] bg-white px-4 py-2.5">
                    {/* Minus */}
                    <button
                      type="button"
                      onClick={() =>
                        setGuests(Math.max(1, guests - 1))
                      }
                      disabled={guests <= 1}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF2E9] transition hover:bg-[#DCE8D7] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      −
                    </button>

                    <span className="font-medium">
                      {guests}
                    </span>

                    {/* Plus */}
                    <button
                      type="button"
                      onClick={() =>
                        setGuests(Math.min(maxGuests, guests + 1))
                      }
                      disabled={guests >= maxGuests}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF2E9] transition hover:bg-[#DCE8D7] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      +
                    </button>
                  </div>

                  <p className="mt-2 text-xs text-[#817A6E]">
                    Maximum {maxGuests}{" "}
                    {maxGuests === 1 ? "guest" : "guests"} for this table.
                  </p>
                </div>
              </div>
            </section>

            {/* Personal Details */}
            <section className="rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1] p-6">
              <h2 className="font-serif text-2xl">
                Your details
              </h2>

              <div className="mt-6 space-y-5">
                {/* Name */}
                <label className="block">
                  <span className="text-sm font-medium">
                    Name
                  </span>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-[#D8D0C1] bg-white px-4 py-3 outline-none focus:border-[#8FA487]"
                    required
                  />
                </label>

                {/* Phone */}
                <label className="block">
                  <span className="text-sm font-medium">
                    Phone number
                  </span>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your phone number"
                    className="mt-2 w-full rounded-xl border border-[#D8D0C1] bg-white px-4 py-3 outline-none focus:border-[#8FA487]"
                    required
                  />
                </label>
              </div>
            </section>
          </div>

          {/* RIGHT SIDE */}
          <section className="rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1] p-6 sm:p-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#71856A]">
                Work-friendly seating
              </p>

              <h2 className="mt-3 font-serif text-3xl">
                Choose your table
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#6A655B]">
                These designated tables are available for guests who want
                to work, study or spend a longer stretch of time at
                CaféFlow.
              </p>
            </div>

            {/* Legend */}
            <div className="mt-7 flex flex-wrap gap-5 text-xs text-[#6A655B]">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#DCE8D7]" />
                Available
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#53664D]" />
                Selected
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#D5D0C7]" />
                Unavailable
              </div>
            </div>

            {/* Tables */}
            <div className="mt-8 grid grid-cols-2 gap-5">
              {tables.map((table) => {
                const selected = selectedTable === table.id;

                return (
                  <button
                    key={table.id}
                    type="button"
                    onClick={() => {
                      setSelectedTable(table.id);

                      // Make sure guest count never exceeds
                      // the capacity of the newly selected table.
                      setGuests(
                        Math.min(guests, table.seats)
                      );
                    }}
                    className={`relative min-h-32 rounded-2xl border-2 p-5 text-left transition ${
                      selected
                        ? "border-[#53664D] bg-[#E3EBDD]"
                        : "border-[#D8D0C1] bg-[#F5F1E9] hover:border-[#AEBFA6]"
                    }`}
                  >
                    {/* Selected check */}
                    {selected && (
                      <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#53664D] text-white">
                        <Check size={14} />
                      </span>
                    )}

                    <span className="block font-serif text-2xl">
                      {table.id}
                    </span>

                    <span className="mt-2 block text-sm text-[#6A655B]">
                      {table.seats}{" "}
                      {table.seats === 1 ? "person" : "people"}
                    </span>

                    <span className="mt-4 block text-xs uppercase tracking-wider text-[#71856A]">
                      Work-friendly
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Information */}
            <div className="mt-8 rounded-xl bg-[#EEF2E9] p-4 text-sm leading-6 text-[#53664D]">
              <strong>Good to know:</strong> only designated
              work-friendly seating is bookable. Other café seating
              remains available for regular walk-in customers.
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-[#53664D] py-4 text-sm font-semibold text-white transition hover:bg-[#42533D]"
            >
              Confirm Booking
            </button>
          </section>
        </form>
      </section>
    </main>
  );
}

export default Booking;