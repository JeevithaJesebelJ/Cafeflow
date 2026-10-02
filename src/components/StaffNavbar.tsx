
import {
  LayoutDashboard,
  ShoppingBag,
  CalendarDays,
  Users,
  ArrowLeft,
  Menu,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function StaffNavbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigation = [
    {
      name: "Dashboard",
      path: "/staff",
      icon: LayoutDashboard,
    },
    {
      name: "Orders",
      path: "/staff/orders",
      icon: ShoppingBag,
    },
    {
      name: "Bookings",
      path: "/staff/bookings",
      icon: CalendarDays,
    },
    {
      name: "Staff Management",
      path: "/staff/management",
      icon: Users,
    },
  ];

  const isActive = (path: string) => {
    if (path === "/staff") {
      return location.pathname === "/staff";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#D8D0C1] bg-[#FBF8F1]/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        <div className="flex h-20 items-center justify-between">

          {/* Brand */}
          <Link
            to="/staff"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#53664D]">
              <span className="font-serif text-lg text-white">
                B
              </span>
            </div>

            <div>
              <p className="font-serif text-xl leading-none text-[#3D392F]">
                CaféFlow
              </p>

              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#71856A]">
                Staff
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 md:flex">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition ${
                    active
                      ? "bg-[#53664D] text-white"
                      : "text-[#6A655B] hover:bg-[#F0EBE2] hover:text-[#3D392F]"
                  }`}
                >
                  <Icon size={17} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Customer Site */}
          <Link
            to="/"
            className="hidden items-center gap-2 rounded-full border border-[#D8D0C1] px-4 py-2.5 text-sm font-medium text-[#6A655B] transition hover:bg-[#F0EBE2] hover:text-[#3D392F] lg:flex"
          >
            <ArrowLeft size={16} />
            Customer Site
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8D0C1] text-[#53664D] transition hover:bg-[#F0EBE2] md:hidden"
            aria-label="Toggle staff navigation"
          >
            {mobileOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>

        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="border-t border-[#D8D0C1] py-4 md:hidden">

            <nav className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      active
                        ? "bg-[#53664D] text-white"
                        : "text-[#6A655B] hover:bg-[#F0EBE2]"
                    }`}
                  >
                    <Icon size={18} />
                    {item.name}
                  </Link>
                );
              })}

              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#6A655B] transition hover:bg-[#F0EBE2]"
              >
                <ArrowLeft size={18} />
                Customer Site
              </Link>
            </nav>

          </div>
        )}

      </div>
    </header>
  );
}

export default StaffNavbar;

