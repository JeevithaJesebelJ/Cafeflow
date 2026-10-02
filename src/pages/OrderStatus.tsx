import { useEffect, useState } from "react";
import { Check, Clock3, ChefHat, ShoppingBag } from "lucide-react";

import {
  getOrders,
  type Order,
} from "../data/orderStorage";

function OrderStatus() {
  const [order, setOrder] = useState<Order | null>(null);

  const loadLatestOrder = () => {
    const orders = getOrders();

    if (orders.length > 0) {
      setOrder(orders[orders.length - 1]);
    }
  };

  useEffect(() => {
    loadLatestOrder();

    const interval = setInterval(() => {
      loadLatestOrder();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!order) {
    return (
      <main className="min-h-screen bg-[#F6F1E8] text-[#3D392F]">
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">

          <ShoppingBag
            size={42}
            className="mx-auto text-[#71856A]"
          />

          <h1 className="mt-6 font-serif text-4xl">
            No order found
          </h1>

          <p className="mt-3 text-[#6A655B]">
            Place an order from the CaféFlow menu to track it here.
          </p>

        </section>
      </main>
    );
  }

  const steps = [
    {
      status: "Received",
      title: "Order received",
      description: "Your order has been received by CaféFlow.",
    },
    {
      status: "Preparing",
      title: "Preparing your order",
      description: "The CaféFlow team is preparing your food and drinks.",
    },
    {
      status: "Ready",
      title: "Ready for you",
      description: "Your order is ready to be picked up.",
    },
    {
      status: "Completed",
      title: "Order completed",
      description: "Enjoy your order!",
    },
  ];

  const currentIndex = steps.findIndex(
    (step) => step.status === order.status
  );

  return (
    <main className="min-h-screen bg-[#F6F1E8] text-[#3D392F]">
      <section className="mx-auto max-w-4xl px-6 py-12 sm:px-10 lg:px-16 lg:py-16">

        {/* Header */}
        <div className="text-center">

          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#71856A]">
            CaféFlow · Jayanagar
          </p>

          <h1 className="mt-4 font-serif text-5xl tracking-tight">
            Track your order
          </h1>

          <p className="mt-4 text-[#6A655B]">
            Order #{order.id}
          </p>

        </div>

        {/* Current status */}
        <div className="mt-10 rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1] p-8 text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#DCE8D7]">
            <ChefHat
              size={34}
              className="text-[#53664D]"
            />
          </div>

          <h2 className="mt-6 font-serif text-3xl">
            {order.status === "Received" &&
              "We've received your order."}

            {order.status === "Preparing" &&
              "Your order is being prepared."}

            {order.status === "Ready" &&
              "Your order is ready!"}

            {order.status === "Completed" &&
              "Your order is complete."}
          </h2>

          <p className="mt-3 text-[#6A655B]">
            {steps[currentIndex]?.description}
          </p>

        </div>

        {/* Progress */}
        <div className="mt-8 rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1] p-8">

          <div className="space-y-7">

            {steps.map((step, index) => {
              const completed = index <= currentIndex;
              const current = index === currentIndex;

              return (
                <div
                  key={step.status}
                  className="flex items-start gap-5"
                >

                  {/* Icon */}
                  <div className="flex flex-col items-center">

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full ${
                        completed
                          ? "bg-[#53664D] text-white"
                          : "bg-[#E8E4DA] text-[#817A6E]"
                      }`}
                    >
                      {completed ? (
                        <Check size={19} />
                      ) : (
                        <Clock3 size={19} />
                      )}
                    </div>

                    {index < steps.length - 1 && (
                      <div
                        className={`mt-2 h-10 w-px ${
                          index < currentIndex
                            ? "bg-[#53664D]"
                            : "bg-[#D8D0C1]"
                        }`}
                      />
                    )}

                  </div>

                  {/* Text */}
                  <div className="pt-1">

                    <p
                      className={`font-semibold ${
                        current
                          ? "text-[#53664D]"
                          : "text-[#3D392F]"
                      }`}
                    >
                      {step.title}
                    </p>

                    <p className="mt-1 text-sm text-[#817A6E]">
                      {step.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* Order details */}
        <div className="mt-8 rounded-[1.75rem] border border-[#D8D0C1] bg-[#FBF8F1] p-8">

          <h2 className="font-serif text-2xl">
            Order details
          </h2>

          <div className="mt-6 space-y-4">

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

          <div className="mt-6 flex items-center justify-between border-t border-[#E2DBCF] pt-5">

            <p className="font-medium">
              Total
            </p>

            <p className="font-serif text-2xl text-[#53664D]">
              ₹{order.total}
            </p>

          </div>

        </div>

      </section>
    </main>
  );
}

export default OrderStatus;