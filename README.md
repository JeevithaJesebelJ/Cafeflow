# CaféFlow ☕️

### Digital Café Operations Platform

CaféFlow is an independently developed MVP designed to explore how cafés can streamline their everyday digital operations through a single platform.

The project combines **online ordering, table/workspace reservations, and staff operations** into one responsive web application.

> **Project status:** Independent MVP / Portfolio Project

---

## ✨ Features

### Customer Experience

* Browse the café menu
* Search and filter menu items
* Add items to a shopping cart
* Update cart quantities
* Place orders
* Reserve work-friendly seating
* View booking information

### Staff Operations

* Staff dashboard
* View incoming orders
* Update order status
* View and manage bookings
* Confirm or cancel bookings
* Add and manage staff members
* Activate/deactivate staff members

### Responsive Design

* Desktop customer experience
* Mobile-friendly customer experience
* Responsive staff dashboard
* Mobile staff navigation

---

## 🛠️ Tech Stack

* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **React Router**
* **Lucide React**
* **LocalStorage**

---

## 🏗️ Project Structure

```text
src/
├── components/
│   ├── Navbar.tsx
│   └── StaffNavbar.tsx
│
├── data/
│   ├── bookingStorage.ts
│   ├── cartStorage.ts
│   ├── menu.ts
│   ├── orderStorage.ts
│   └── staffStorage.ts
│
├── pages/
│   ├── Home.tsx
│   ├── Menu.tsx
│   ├── Booking.tsx
│   ├── Cart.tsx
│   ├── StaffDashboard.tsx
│   ├── StaffOrders.tsx
│   ├── StaffBookings.tsx
│   └── StaffManagement.tsx
│
└── App.tsx
```

---

## 🚀 Running Locally

Clone the repository:

```bash
git clone https://github.com/JeevithaJesebelJ/Cafeflow
```

Move into the project:

```bash
cd cafeflow
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will then be available through the local development URL provided by Vite.

---

## 💡 Why I Built This

CaféFlow started from a simple observation:

**Cafés are increasingly becoming spaces where people don't just eat and leave — they work, meet, study, and spend extended periods of time.**

This MVP explores how digital tools could help cafés manage:

* customer ordering
* workspace seating
* reservations
* incoming orders
* staff operations

The goal was to build a practical product rather than simply a static café website.

---

## 🔮 Future Improvements

Potential future versions could include:

* Online payments
* QR-based table ordering
* Real-time order tracking
* Real-time table availability
* Customer accounts
* Automated booking confirmations
* Analytics dashboard
* Cloud database
* Authentication and role-based access
* Multi-café support

---

## ⚠️ Disclaimer

CaféFlow is an independently developed prototype created for portfolio and product exploration purposes.

It is **not affiliated with, endorsed by, or officially associated with any café, business, or brand referenced during the project's design or development.**

All trademarks and brand names belong to their respective owners.

