
import { useState } from "react";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import {
  getCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
  type CartItem,
} from "../data/cartStorage";

import { saveOrder } from "../data/orderStorage";

function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState<CartItem[]>(getCart());
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const refreshCart = () => {
    setCart(getCart());
  };

  const increaseQuantity = (item: CartItem) => {
    updateCartQuantity(item.id, item.quantity + 1);
    refreshCart();
  };

  const decreaseQuantity = (item: CartItem) => {
    updateCartQuantity(item.id, item.quantity - 1);
    refreshCart();
  };

  const handleRemove = (itemId: string) => {
    removeFromCart(itemId);
    refreshCart();
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (!customerName.trim() || !customerPhone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }

    if (customerPhone.trim().length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (cart.length === 0) {
      return;
    }

    const order = {
      id: `BL-${Date.now()}`,
      name: customerName.trim(),
      phone: customerPhone.trim(),
      items: cart,
      total: subtotal,
      status: "Received" as const,
      createdAt: new Date().toISOString(),
    };

    saveOrder(order);

    setOrderId(order.id);

    clearCart();
    setCart([]);
    setOrderPlaced(true);
  };

  /* ORDER SUCCESS */
  if (orderPlaced) {
    return (
      <main className="min-h-screen bg-[#F6F1E8] px-6 py-16 text-[#3D392F] sm:px-10 lg:px-16">
        <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center">
          <div className="w-full rounded-[2rem] border border-[#D8D0C1] bg-[#FBF8F1] px-6 py-14 text-center sm:px-12">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#DCE8D7]">
              <CheckCircle2
                size={42}
                className="text-[#53664D]"
              />
            </div>

            <p className="mt-8 text-sm font-medium uppercase tracking-[0.22em] text-[#71856A]">
              CaféFlow · Jayanagar
            </p>

            <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
              Order received.
            </h1>

            <p className="mx-auto mt-5 max-w-lg leading-7 text-[#6A655B]">
              Thank you, {customerName}. Your order has
              been received by CaféFlow.
            </p>

            <p className="mt-3 text-sm text-[#817A6E]">
              Order ID: {orderId}
            </p>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#817A6E]">
              You can track your order below to see when
              it is being prepared and when it is ready.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <button
                type="button"
                onClick={() => navigate("/order-status")}
                className="inline-flex items-center justify-center rounded-full bg-[#53664D] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#42533D]"
              >
                Track Order
              </button>

              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full border border-[#D8D0C1] px-7 py-3.5 text-sm font-semibold text-[#53664D] transition hover:bg-[#F0EBE2]"
              >
                <ArrowLeft size={17} />
                Back to Menu
              </Link>

            </div>

          </div>
        </div>
      </main>
    );
  }

  /* EMPTY CART */
  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#F6F1E8] px-6 py-16 text-[#3D392F] sm:px-10 lg:px-16">
        <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center">
          <div className="w-full rounded-[2rem] border border-[#D8D0C1] bg-[#FBF8F1] px-6 py-14 text-center sm:px-12">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#E8E4DA]">
              <ShoppingBag
                size={38}
                className="text-[#71856A]"
              />
            </div>

            <p className="mt-8 text-sm font-medium uppercase tracking-[0.22em] text-[#71856A]">
              CaféFlow · Jayanagar
            </p>

            <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
              Your cart is empty.
            </h1>

            <p className="mx-auto mt-5 max-w-md leading-7 text-[#6A655B]">
              Looks like you haven't added anything yet.
              Explore our menu and find something worth
              staying for.
            </p>

            <Link
              to="/menu"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#53664D] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#42533D]"
            >
              Explore Menu
            </Link>

          </div>
        </div>
      </main>
    );
  }

  /* CART */
  return (
    <main className="min-h-screen bg-[#F6F1E8] text-[#3D392F]">
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16 lg:py-16">

        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#71856A]">
            CaféFlow · Jayanagar
          </p>

          <h1 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl">
            Your Cart
          </h1>

          <p className="mt-5 text-[#6A655B]">
            {totalItems}{" "}
            {totalItems === 1 ? "item" : "items"} selected
            for your order.
          </p>
        </div>

        {/* Cart layout */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* Items */}
          <div className="space-y-5">

            {cart.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1]"
              >
                <div className="flex flex-col sm:flex-row">

                  {/* Image */}
                  <div className="h-52 w-full sm:h-auto sm:w-48">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-1 flex-col justify-between p-6">

                    <div>
                      <div className="flex items-start justify-between gap-4">

                        <h2 className="font-serif text-2xl">
                          {item.name}
                        </h2>

                        <p className="font-semibold text-[#53664D]">
                          ₹{item.price * item.quantity}
                        </p>

                      </div>

                      <p className="mt-1 text-sm text-[#817A6E]">
                        ₹{item.price} each
                      </p>
                    </div>

                    {/* Quantity + Remove */}
                    <div className="mt-6 flex items-center justify-between gap-4">

                      <div className="flex items-center rounded-full border border-[#D8D0C1] bg-[#F6F1E8]">

                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(item)
                          }
                          className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[#E8E3D9]"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="w-8 text-center text-sm font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(item)
                          }
                          className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[#E8E3D9]"
                        >
                          <Plus size={16} />
                        </button>

                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          handleRemove(item.id)
                        }
                        className="flex items-center gap-2 text-sm font-medium text-[#817A6E] transition hover:text-[#8B5E4B]"
                      >
                        <Trash2 size={16} />
                        Remove
                      </button>

                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* Continue browsing */}
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-[#53664D] transition hover:text-[#42533D]"
            >
              <ArrowLeft size={17} />
              Continue browsing
            </Link>

          </div>

          {/* Summary */}
          <aside className="h-fit rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1] p-6 lg:sticky lg:top-8">

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#71856A]">
              Order Summary
            </p>

            <h2 className="mt-3 font-serif text-3xl">
              Ready when you are.
            </h2>

            {/* Customer details */}
            <div className="mt-8 space-y-4">

              <div>
                <label
                  htmlFor="customerName"
                  className="mb-2 block text-sm font-medium text-[#5E5A51]"
                >
                  Your name
                </label>

                <input
                  id="customerName"
                  type="text"
                  value={customerName}
                  onChange={(event) =>
                    setCustomerName(event.target.value)
                  }
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-[#D8D0C1] bg-[#F6F1E8] px-4 py-3 text-sm outline-none transition focus:border-[#8FA487]"
                />
              </div>

              <div>
                <label
                  htmlFor="customerPhone"
                  className="mb-2 block text-sm font-medium text-[#5E5A51]"
                >
                  Phone number
                </label>

                <input
                  id="customerPhone"
                  type="tel"
                  value={customerPhone}
                  onChange={(event) =>
                    setCustomerPhone(event.target.value)
                  }
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-[#D8D0C1] bg-[#F6F1E8] px-4 py-3 text-sm outline-none transition focus:border-[#8FA487]"
                />
              </div>

            </div>

            {/* Price summary */}
            <div className="mt-6 space-y-4 border-b border-[#DDD6C8] pb-6">

              <div className="flex justify-between text-sm">
                <span className="text-[#6A655B]">
                  Items
                </span>

                <span className="font-medium">
                  {totalItems}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-[#6A655B]">
                  Subtotal
                </span>

                <span className="font-medium">
                  ₹{subtotal}
                </span>
              </div>

            </div>

            <div className="mt-6 flex items-center justify-between">

              <span className="font-serif text-2xl">
                Total
              </span>

              <span className="font-serif text-2xl text-[#53664D]">
                ₹{subtotal}
              </span>

            </div>

            <button
              type="button"
              onClick={handlePlaceOrder}
              className="mt-8 w-full rounded-full bg-[#53664D] py-4 text-sm font-semibold text-white transition hover:bg-[#42533D]"
            >
              Place Order
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-[#817A6E]">
              This is an MVP ordering flow.
              Payment can be connected later.
            </p>

          </aside>
        </div>
      </section>
    </main>
  );
}

export default Cart;

