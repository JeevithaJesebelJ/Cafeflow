export type Booking = {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  duration: string;
  guests: number;
  table: string;
  status: "Confirmed" | "Cancelled";
  createdAt: string;
};

const STORAGE_KEY = "CaféFlow_bookings";

export function getBookings(): Booking[] {
  try {
    const storedBookings = localStorage.getItem(STORAGE_KEY);

    if (!storedBookings) {
      return [];
    }

    return JSON.parse(storedBookings) as Booking[];
  } catch {
    return [];
  }
}

export function saveBooking(booking: Booking): void {
  const existingBookings = getBookings();

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...existingBookings, booking])
  );
}

export function updateBookingStatus(
  bookingId: string,
  status: Booking["status"]
): void {
  const bookings = getBookings();

  const updatedBookings = bookings.map((booking) =>
    booking.id === bookingId
      ? { ...booking, status }
      : booking
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedBookings)
  );
}