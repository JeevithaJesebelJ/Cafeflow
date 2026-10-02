
import { useEffect, useState } from "react";
import {
  ShoppingBag,
  Clock3,
  User,
  Phone,
  Check,
} from "lucide-react";

import StaffNavbar from "../components/StaffNavbar";

import {
  getOrders,
  updateOrderStatus,
  type Order,
} from "../data/orderStorage";

function StaffOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  const loadOrders = () => {
    setOrders(getOrders());
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const handleStatusChange = (
    orderId: string,
    status: Order["status"]
  ) => {
    updateOrderStatus(orderId, status);
    loadOrders();
  };

  return (
    <>
      <StaffNavbar />

      <main className="min-h-screen bg-[#F6F1E8] text-[#3D392F]">
        <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16 lg:py-16">

          {/* Header */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#71856A]">
              CaféFlow · Staff
            </p>

            <h1 className="mt-3 font-serif text-5xl tracking-tight sm:text-6xl">
              Orders Received
            </h1>

            <p className="mt-4 max-w-2xl text-[#6A655B]">
              View and manage customer orders placed
              through the CaféFlow website.
            </p>
          </div>

          {/* Summary */}
          <div className="mt-10 grid gap-5 sm:grid-cols-3">

            {/* Total */}
            <div className="rounded-2xl border border-[#D8D0C1] bg-[#FBF8F1] p-6">
              <div className="flex items-center gap-3">
                <ShoppingBag
                  size={20}
                  className="text-[#53664D]"
                />

                <p className="text-sm text-[#817A6E]">
                  Total orders
                </p>
              </div>

              <p className="mt-3 font-serif text-4xl">
                {orders.length}
              </p>
            </div>

            {/* Received */}
            <div className="rounded-2xl border border-[#D8D0C1] bg-[#FBF8F1] p-6">
              <div className="flex items-center gap-3">
                <Clock3
                  size={20}
                  className="text-[#71856A]"
                />

                <p className="text-sm text-[#817A6E]">
                  New orders
                </p>
              </div>

              <p className="mt-3 font-serif text-4xl">
                {
                  orders.filter(
                    (order) => order.status === "Received"
                  ).length
                }
              </p>
            </div>

            {/* Completed */}
            <div className="rounded-2xl border border-[#D8D0C1] bg-[#FBF8F1] p-6">
              <div className="flex items-center gap-3">
                <Check
                  size={20}
                  className="text-[#53664D]"
                />

                <p className="text-sm text-[#817A6E]">
                  Completed
                </p>
              </div>

              <p className="mt-3 font-serif text-4xl text-[#53664D]">
                {
                  orders.filter(
                    (order) => order.status === "Completed"
                  ).length
                }
              </p>
            </div>

          </div>

          {/* Orders */}
          <div className="mt-10">

            {orders.length === 0 ? (
              <div className="rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1] p-12 text-center">

                <ShoppingBag
                  size={38}
                  className="mx-auto text-[#71856A]"
                />

                <h2 className="mt-5 font-serif text-2xl">
                  No orders yet
                </h2>

                <p className="mt-2 text-[#6A655B]">
                  New customer orders will appear here.
                </p>

              </div>
            ) : (
              <div className="space-y-5">

                {orders.map((order) => (
                  <article
                    key={order.id}
                    className="rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1] p-6"
                  >

                    {/* Order header */}
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                      {/* Customer */}
                      <div>

                        <div className="flex flex-wrap items-center gap-3">

                          <h2 className="font-serif text-2xl">
                            Order #{order.id}
                          </h2>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              order.status === "Received"
                                ? "bg-[#F0E4C8] text-[#806B39]"
                                : order.status === "Preparing"
                                ? "bg-[#E8E4DA] text-[#6A655B]"
                                : order.status === "Ready"
                                ? "bg-[#DCE8D7] text-[#53664D]"
                                : "bg-[#DCE8D7] text-[#53664D]"
                            }`}
                          >
                            {order.status}
                          </span>

                        </div>

                        {/* Customer information */}
                        <div className="mt-4 space-y-2 text-sm text-[#6A655B]">

                          <p className="flex items-center gap-2">
                            <User size={15} />
                            {order.name}
                          </p>

                          <p className="flex items-center gap-2">
                            <Phone size={15} />
                            {order.phone}
                          </p>

                        </div>

                      </div>

                      {/* Created time */}
                      <div className="text-sm text-[#817A6E]">
                        <p className="flex items-center gap-2">
                          <Clock3 size={15} />
                          {order.createdAt}
                        </p>
                      </div>

                    </div>

                    {/* Items */}
                    <div className="mt-6 border-t border-[#E2DBCF] pt-6">

                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#817A6E]">
                        Order Items
                      </p>

                      <div className="mt-4 space-y-3">

                        {order.items.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center justify-between gap-4"
                          >

                            <div>
                              <p className="font-medium">
                                {item.name}
                              </p>

                              <p className="text-sm text-[#817A6E]">
                                Qty: {item.quantity}
                              </p>
                            </div>

                            <p className="font-medium text-[#53664D]">
                              ₹{item.price * item.quantity}
                            </p>

                          </div>
                        ))}

                      </div>

                    </div>

                    {/* Total */}
                    <div className="mt-6 flex items-center justify-between border-t border-[#E2DBCF] pt-5">

                      <p className="font-medium">
                        Total
                      </p>

                      <p className="font-serif text-2xl text-[#53664D]">
                        ₹{order.total}
                      </p>

                    </div>

                    {/* Status actions */}
                    <div className="mt-6 flex flex-wrap gap-3">

                      {order.status === "Received" && (
                        <button
                          type="button"
                          onClick={() =>
                            handleStatusChange(
                              order.id,
                              "Preparing"
                            )
                          }
                          className="rounded-full bg-[#53664D] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#42533D]"
                        >
                          Start Preparing
                        </button>
                      )}

                      {order.status === "Preparing" && (
                        <button
                          type="button"
                          onClick={() =>
                            handleStatusChange(
                              order.id,
                              "Ready"
                            )
                          }
                          className="rounded-full bg-[#53664D] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#42533D]"
                        >
                          Mark Ready
                        </button>
                      )}

                      {order.status === "Ready" && (
                        <button
                          type="button"
                          onClick={() =>
                            handleStatusChange(
                              order.id,
                              "Completed"
                            )
                          }
                          className="flex items-center gap-2 rounded-full bg-[#53664D] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#42533D]"
                        >
                          <Check size={16} />
                          Complete Order
                        </button>
                      )}

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

export default StaffOrders;

