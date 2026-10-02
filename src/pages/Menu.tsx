import { useState } from "react";
import { ShoppingBag, Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { menuItems } from "../data/menu";
import { addToCart, getCartCount } from "../data/cartStorage";

const categories = [
  "All",
  "Coffee",
  "CaféFlow Specials Cold",
  "Gourmet Italian Pastas",
  "Wholesome Bowls",
  "Toast & Sandwiches",
  "Pastries & Desserts",
  "Shakes & Frappes",
  "Iced Tea",
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(getCartCount());

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item: (typeof menuItems)[number]) => {
    addToCart({
      id: String(item.id),
      name: item.name,
      price: item.price,
      image: item.image,
    });

    setCartCount(getCartCount());
  };

  return (
    <div className="min-h-screen bg-[#F6F1E8] text-[#3D392F]">
      <main className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16 lg:py-16">

        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#71856A]">
            CaféFlow · Jayanagar
          </p>

          <h1 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl">
            Our Menu
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#6A655B]">
            Coffee, food and little things worth staying for.
            Explore the menu and build your order.
          </p>
        </div>

        {/* Search */}
        <div className="relative mt-10 max-w-xl">
          <Search
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#817A6E]"
          />

          <input
            type="text"
            placeholder="Search the menu..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-full rounded-full border border-[#D8D0C1] bg-[#FBF8F1] py-3.5 pl-11 pr-5 outline-none transition focus:border-[#8FA487]"
          />
        </div>

        {/* Categories */}
        <div className="mt-8 flex gap-3 overflow-x-auto pb-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-[#53664D] text-white"
                  : "border border-[#D8D0C1] bg-[#FBF8F1] text-[#5E5A51] hover:border-[#AEBFA6]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-[1.75rem] border border-[#DDD6C8] bg-[#FBF8F1]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {item.vegetarian && (
                  <span className="absolute left-4 top-4 rounded-full bg-[#E0EBD9] px-3 py-1 text-xs font-semibold text-[#4E6247]">
                    Veg
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-serif text-2xl leading-tight">
                    {item.name}
                  </h2>

                  <span className="shrink-0 font-semibold text-[#53664D]">
                    ₹{item.price}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#6A655B]">
                  {item.description}
                </p>

                {/* Add to Cart */}
                <button
                  type="button"
                  onClick={() => handleAddToCart(item)}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#B9CDB0] py-3 text-sm font-semibold text-[#293126] transition hover:bg-[#A9C09F]"
                >
                  <Plus size={17} />
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* No results */}
        {filteredItems.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-serif text-2xl">
              No items found.
            </p>

            <p className="mt-2 text-[#6A655B]">
              Try another search or category.
            </p>
          </div>
        )}

        {/* Floating cart */}
        <Link
          to="/cart"
          className="fixed bottom-6 right-6 flex items-center gap-2 rounded-full bg-[#53664D] px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#42533D]"
        >
          <ShoppingBag size={19} />

          <span>Cart</span>

          {cartCount > 0 && (
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#E7ECDD] px-1.5 text-xs font-bold text-[#53664D]">
              {cartCount}
            </span>
          )}
        </Link>

      </main>
    </div>
  );
}

export default Menu;