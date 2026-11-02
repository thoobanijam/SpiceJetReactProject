import React from "react";
import { Plane, ArrowRight, Tag, CalendarDays, Percent } from "lucide-react";

const Deals = () => {
  const deals = [
    {
      title: "FLAT 15% OFF",
      subtitle: "Your next domestic getaway",
      code: "FLY15",
      description: "Get 15% off on selected domestic flight bookings.",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "SPECIAL FARE",
      subtitle: "Explore international destinations",
      code: "SPICEINT",
      description: "Discover special fares on selected international routes.",
      color: "from-red-600 to-orange-500",
    },
    {
      title: "WEEKEND GETAWAY",
      subtitle: "Make your weekends memorable",
      code: "WEEKEND",
      description: "Enjoy exciting offers on selected weekend flights.",
      color: "from-orange-600 to-amber-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 via-orange-500 to-orange-400 px-6 py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 md:flex-row">
          <div className="max-w-2xl">
            <p className="mb-4 font-bold uppercase tracking-[4px]">
              SpiceJet Special Offers
            </p>

            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              BIG SAVINGS.
              <br />
              GREAT JOURNEYS.
            </h1>

            <p className="mt-5 text-lg text-white/90">
              Discover exciting flight deals and make your next journey
              more affordable with our special offers.
            </p>

            <button
              onClick={() => window.location.href = "/"}
              className="mt-8 flex items-center gap-3 rounded-lg bg-white px-7 py-3 font-bold text-red-600 shadow-lg transition hover:bg-gray-100"
            >
              BOOK YOUR FLIGHT <ArrowRight size={20} />
            </button>
          </div>

          <div className="flex h-64 w-64 items-center justify-center rounded-full border-8 border-white/30 bg-white/15">
            <div className="text-center">
              <Percent size={55} className="mx-auto" />
              <p className="mt-2 text-5xl font-extrabold">15%</p>
              <p className="font-bold">SPECIAL SAVINGS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Heading */}
      <section className="mx-auto mt-14 max-w-6xl px-6">
        <div className="text-center">
          <p className="font-bold uppercase tracking-widest text-orange-500">
            Exclusive Offers
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-gray-800 md:text-4xl">
            Explore Our Latest Deals
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Find an offer that suits your travel plans and enjoy your
            journey with SpiceJet.
          </p>
        </div>

        {/* Deal Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal) => (
            <div
              key={deal.code}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`bg-gradient-to-r ${deal.color} p-8 text-white`}>
                <Tag size={35} />
                <h3 className="mt-5 text-3xl font-extrabold">
                  {deal.title}
                </h3>
                <p className="mt-2">{deal.subtitle}</p>
              </div>

              <div className="p-6">
                <p className="leading-7 text-gray-600">
                  {deal.description}
                </p>

                <div className="mt-5 rounded-lg border-2 border-dashed border-orange-400 bg-orange-50 p-4 text-center">
                  <p className="text-sm text-gray-500">USE PROMO CODE</p>
                  <p className="mt-1 text-xl font-extrabold tracking-widest text-red-600">
                    {deal.code}
                  </p>
                </div>

                <button
                  onClick={() => window.location.href = "/"}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 py-3 font-bold text-white transition hover:bg-red-700"
                >
                  BOOK NOW <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mx-auto mt-20 max-w-6xl px-6">
        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-center text-2xl font-extrabold text-gray-800">
            Why Book With SpiceJet?
          </h2>

          <div className="mt-10 grid gap-8 text-center md:grid-cols-3">
            <div>
              <Plane size={35} className="mx-auto text-orange-500" />
              <h3 className="mt-4 font-bold text-gray-800">
                Affordable Flights
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Explore attractive fares for your next trip.
              </p>
            </div>

            <div>
              <Tag size={35} className="mx-auto text-orange-500" />
              <h3 className="mt-4 font-bold text-gray-800">
                Exciting Offers
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Discover special deals and promotional fares.
              </p>
            </div>

            <div>
              <CalendarDays size={35} className="mx-auto text-orange-500" />
              <h3 className="mt-4 font-bold text-gray-800">
                Easy Booking
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Plan and book your journey with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <p className="mx-auto mt-10 max-w-5xl px-6 text-center text-xs text-gray-400">
        Promotional offers and promo codes shown here are sample content
        for this website design. They are not verified active SpiceJet offers.
      </p>

    </div>
  );
};

export default Deals;