export type MenuItem = {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  vegetarian?: boolean;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Cappuccino",
    description: "Rich espresso with steamed milk and a velvety finish.",
    category: "Coffee",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80",
    vegetarian: true,
  },
  {
    id: 2,
    name: "Banana Latte Cold",
    description: "Bold espresso and creamy milk with a naturally sweet banana twist.",
    category: "CaféFlow Specials Cold",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    vegetarian: true,
  },
  {
    id: 3,
    name: "Spanish Latte Cold",
    description: "Creamy espresso and milk with a gently sweet finish.",
    category: "CaféFlow Specials Cold",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    vegetarian: true,
  },
  {
    id: 4,
    name: "Chicken Alfredo Penne Pasta",
    description: "Penne in creamy Alfredo sauce with Parmesan and garlic bread.",
    category: "Gourmet Italian Pastas",
    price: 420,
    image:
      "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Veg Arrabbiata Penne Pasta",
    description: "Penne tossed in a tangy, spicy tomato sauce with Parmesan.",
    category: "Gourmet Italian Pastas",
    price: 360,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
    vegetarian: true,
  },
  {
    id: 6,
    name: "Banhmi Rice Bowl",
    description: "A modern Vietnamese-inspired rice bowl with fresh vegetables and bold flavours.",
    category: "Wholesome Bowls",
    price: 390,
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Vegan Buddha Bowl",
    description: "A colourful plant-based bowl with vegetables and wholesome grains.",
    category: "Wholesome Bowls",
    price: 360,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    vegetarian: true,
  },
  {
    id: 8,
    name: "Avocado Poached Egg Toast",
    description: "Creamy avocado and a poached egg on toasted bread.",
    category: "Toast & Sandwiches",
    price: 340,
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Italian Pesto Ciabatta Sandwich",
    description: "Fresh pesto, vegetables and filling layered inside toasted ciabatta.",
    category: "Toast & Sandwiches",
    price: 360,
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    vegetarian: true,
  },
  {
    id: 10,
    name: "Freshly Baked Croissant",
    description: "Buttery, flaky pastry baked fresh for the day.",
    category: "Pastries & Desserts",
    price: 160,
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    vegetarian: true,
  },
  {
    id: 11,
    name: "Salted Pistachio Frappe",
    description: "A creamy frappe with a rich pistachio flavour.",
    category: "Shakes & Frappes",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    vegetarian: true,
  },
  {
    id: 12,
    name: "Iced Tea",
    description: "A refreshing chilled tea served over ice.",
    category: "Iced Tea",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
    vegetarian: true,
  },
];