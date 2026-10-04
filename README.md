# ☕ CaféFlow

**A digital ordering and operations platform for cafés.**

CaféFlow is a full-stack café management MVP designed to simplify customer ordering while giving café staff a centralized system to manage incoming orders and update their status in real time.

The project started as an exploration of how small cafés could improve their digital operations without needing a complicated enterprise system.

---

## 🚀 Live Project

**Live Demo:** https://cafeflow-lac.vercel.app/

---

## 📌 Problem

Small cafés often rely on a combination of:

- Manual order taking
- WhatsApp or phone communication
- Paper-based workflows
- Informal order tracking
- Separate systems for customers and staff

This can lead to confusion during busy periods and makes it difficult for customers to know the status of their orders.

**CaféFlow aims to bring these workflows into one simple digital platform.**

---

## 💡 Solution

CaféFlow provides two connected experiences:

### 👤 Customer Experience

Customers can:

- Browse the café menu
- Add items to their cart
- Place an order
- View their order details
- Track the status of their order

### 👨‍🍳 Staff Experience

Café staff can:

- View incoming orders
- View customer information
- View ordered items and totals
- Update order status
- Manage bookings
- Manage staff members
- Monitor café operations through a staff dashboard

---

## ✨ Features

### 🛒 Digital Ordering

Customers can browse menu items, add products to their cart and place orders digitally.

### 📦 Order Tracking

Customers can track their latest order through a dedicated order-tracking page.

Order statuses include:

```text
Received
   ↓
Preparing
   ↓
Ready
   ↓
Completed
```

### 👨‍🍳 Staff Order Management

Staff members can view incoming orders and update their status as the order moves through the preparation process.

### 📊 Staff Dashboard

The staff interface provides a centralized view of café operations, including:

- Orders
- Bookings
- Staff management

### 📅 Table / Workspace Booking

CaféFlow includes a booking workflow designed particularly around cafés that attract remote workers and students.

The concept allows designated work-friendly seating areas to be reserved while keeping regular café seating available for walk-in customers.

### 👥 Staff Management

The staff dashboard includes functionality for managing café staff members.

---

## 🏗️ Tech Stack

### Frontend

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router**
- **Lucide React**

### Backend / Database

- **Supabase**
- PostgreSQL
- Supabase Row Level Security (RLS)

### Deployment

- **Vercel**

### Development Tools

- Git
- GitHub
- VS Code

---

## 🗂️ Project Structure

```text
Beanlore_MVP/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── StaffNavbar.tsx
│   │   └── ...
│   │
│   ├── data/
│   │   ├── cartStorage.ts
│   │   ├── orderStorage.ts
│   │   └── ...
│   │
│   ├── lib/
│   │   └── supabase.ts
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Menu.tsx
│   │   ├── Booking.tsx
│   │   ├── Cart.tsx
│   │   ├── OrderStatus.tsx
│   │   ├── StaffDashboard.tsx
│   │   ├── StaffOrders.tsx
│   │   ├── StaffBookings.tsx
│   │   └── StaffManagement.tsx
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── public/
├── .env
├── package.json
└── README.md
```

---

## 🔄 Order Flow

The current order flow is:

```text
Customer
   │
   ▼
Browse Menu
   │
   ▼
Add Items to Cart
   │
   ▼
Place Order
   │
   ▼
Supabase `orders` table
   │
   ├───────────────┐
   ▼               ▼
Customer        Staff Dashboard
Tracking             │
                     ▼
              Update Order Status
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
    Preparing      Ready      Completed
        │            │            │
        └────────────┴────────────┘
                     │
                     ▼
              Customer Tracking
```

---

## 🗄️ Database

CaféFlow currently uses **Supabase PostgreSQL** for persistent order data.

The `orders` table stores information such as:

```text
id
name
phone
items
total
status
created_at
```

Order status is represented using:

```text
Received
Preparing
Ready
Completed
```

Supabase Row Level Security policies are used to control access to the database.

---

## 🔐 Environment Variables

The project uses environment variables for the Supabase connection.

Create a `.env` file locally:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

**Never commit your `.env` file or private credentials to GitHub.**

Make sure `.env` is included in `.gitignore`:

```gitignore
.env
.env.local
.env.*.local
```

For Vercel deployment, the same variables should be configured through the project's Environment Variables settings.

---

## ⚙️ Running Locally

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
cd Beanlore_MVP
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 🧪 Current MVP Capabilities

The current version demonstrates:

- [x] Café landing page
- [x] Digital menu
- [x] Shopping cart
- [x] Customer ordering
- [x] Persistent order storage with Supabase
- [x] Customer order tracking
- [x] Staff order dashboard
- [x] Order status updates
- [x] Booking workflow
- [x] Staff dashboard
- [x] Staff management
- [x] Supabase RLS policies
- [x] Vercel deployment

---

## 🔮 Future Improvements

The current version is an MVP. Planned improvements include:

### Customer Experience

- Customer accounts
- Order history
- Online payments
- Order notifications
- QR-based table ordering
- Real-time order status updates

### Café Operations

- Better booking conflict management
- Table availability visualization
- Daily sales analytics
- Inventory management
- Menu management
- Staff authentication and role-based permissions

### Business Intelligence

- Revenue dashboards
- Popular item analysis
- Peak-hour analysis
- Customer behavior insights
- Booking vs. walk-in analysis

---

## 🎯 Project Vision

CaféFlow is being developed as a practical digital operations platform for small cafés.

The broader goal is to explore how lightweight software can help local businesses digitize everyday workflows without requiring expensive or overly complex systems.

The project is designed around a simple principle:

> **Make café operations simpler for staff and more convenient for customers.**

---

## 👩‍💻 Built By

**Jeevitha Jesebel J**

AI & Machine Learning Engineering Student  
Interested in building practical AI/ML and software products for real-world businesses.

---

## 📄 License

This project is currently intended as a portfolio and MVP project.
