
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#DDD6C8] bg-[#F6F1E8]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="font-serif text-3xl font-semibold tracking-tight text-[#3D392F]"
        >
          CaféFlow
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="text-sm font-medium text-[#4D493F] transition hover:text-[#71856A]"
          >
            Home
          </Link>

          <Link
            to="/menu"
            className="text-sm font-medium text-[#4D493F] transition hover:text-[#71856A]"
          >
            Menu
          </Link>

          <Link
            to="/booking"
            className="rounded-full bg-[#B9CDB0] px-5 py-2.5 text-sm font-semibold text-[#293126] transition hover:bg-[#A9C09F]"
          >
            Book a Table
          </Link>

          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#4D493F] transition hover:bg-[#E2E8DD]"
          >
            <ShoppingBag size={20} strokeWidth={1.8} />
          </Link>

        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">

          <Link
            to="/cart"
            aria-label="Shopping cart"
            onClick={closeMobileMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#4D493F] transition hover:bg-[#E2E8DD]"
          >
            <ShoppingBag size={20} />
          </Link>

          <button
            type="button"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DDE8D3] text-[#3D392F]"
          >
            {mobileMenuOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>

        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-[#DDD6C8] bg-[#F6F1E8] px-6 py-5 md:hidden">

          <div className="flex flex-col gap-3">

            <Link
              to="/"
              onClick={closeMobileMenu}
              className="rounded-xl px-4 py-3 text-base font-medium text-[#4D493F] transition hover:bg-[#EDE8DE]"
            >
              Home
            </Link>

            <Link
              to="/menu"
              onClick={closeMobileMenu}
              className="rounded-xl px-4 py-3 text-base font-medium text-[#4D493F] transition hover:bg-[#EDE8DE]"
            >
              Menu
            </Link>

            <Link
              to="/booking"
              onClick={closeMobileMenu}
              className="rounded-full bg-[#B9CDB0] px-5 py-3 text-center text-sm font-semibold text-[#293126] transition hover:bg-[#A9C09F]"
            >
              Book a Table
            </Link>

            <Link
              to="/cart"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 rounded-full border border-[#D8D0C1] px-5 py-3 text-sm font-semibold text-[#4D493F] transition hover:bg-[#EDE8DE]"
            >
              <ShoppingBag size={17} />
              View Cart
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

