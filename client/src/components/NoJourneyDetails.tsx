
import {
  Plane,
  Search,
  CalendarDays,
  MapPin,
  Ticket,
  ArrowRight,
  ShieldCheck,
  Headset,
  Luggage,
  Clock,
  Globe2,
  PlaneTakeoff,
  CircleCheck,
  ArrowLeftRight,
  Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const NoJourneyDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5f6f8]">

      {/* Background Decorations */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-100/50 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-orange-100/60 blur-3xl" />

      {/* Main Container */}
      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <span className="cursor-pointer hover:text-red-700" onClick={() => navigate("/")}>
            Home
          </span>
          <span>/</span>
          <span className="font-semibold text-red-700">Flight Booking</span>
        </div>

        {/* Main Hero Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

          {/* Red Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-r from-[#a90000] via-[#d71920] to-[#f15a24] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">

            {/* Decorative Circles */}
            <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border-[40px] border-white/5" />
            <div className="absolute -right-10 bottom-[-100px] h-72 w-72 rounded-full border-[30px] border-white/10" />

            <div className="absolute right-10 top-10 hidden rotate-[-15deg] opacity-15 md:block">
              <Plane size={260} strokeWidth={0.8} />
            </div>

            <div className="relative z-10 max-w-2xl">

              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Sparkles size={16} />
                <span className="text-xs font-bold uppercase tracking-[2px]">
                  Your Journey Starts Here
                </span>
              </div>

              <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                The World Is Waiting.
                <span className="block text-orange-200">
                  Let's Get You Flying!
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
                Whether you're travelling for business, visiting family, or
                planning your next holiday, your journey begins with the
                perfect flight. Search and discover your next destination
                with SpiceJet.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CircleCheck size={18} />
                  Easy Booking
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheck size={18} />
                  Convenient Travel
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheck size={18} />
                  Great Destinations
                </div>
              </div>

            </div>
          </div>

          {/* Missing Details Section */}
          <div className="px-5 py-10 sm:px-10 lg:px-16">

            <div className="mx-auto max-w-3xl text-center">

              <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-50">
                <div className="absolute inset-2 rounded-full border border-dashed border-red-300" />
                <Ticket size={42} className="text-red-700" />
              </div>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-700">
                <MapPin size={14} />
                Booking Details Required
              </div>

              <h2 className="mt-5 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                No Journey Details Found
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                We couldn't find your flight search information. It seems
                you haven't selected your travel details yet, or your
                previous booking session may have expired.
              </p>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Don't worry! You can start a new search in just a few
                seconds. Enter your departure city, destination, travel
                date, and passenger details to find available flights.
              </p>

            </div>

            {/* Flight Route Illustration */}
            <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-dashed border-red-200 bg-gradient-to-r from-red-50 via-white to-orange-50 p-6 sm:p-8">

              <div className="flex items-center justify-between gap-3">

                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                    <PlaneTakeoff className="text-red-700" size={23} />
                  </div>
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                    Departure
                  </p>
                  <h3 className="mt-1 text-base font-extrabold text-gray-800 sm:text-lg">
                    Your City
                  </h3>
                </div>

                <div className="flex flex-1 flex-col items-center px-2">
                  <div className="flex w-full items-center">
                    <div className="h-2 w-2 rounded-full bg-red-600" />
                    <div className="relative flex-1 border-t-2 border-dashed border-red-300">
                      <Plane
                        size={24}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 bg-red-50 text-red-700"
                      />
                    </div>
                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                  </div>
                  <span className="mt-4 text-[10px] font-semibold uppercase tracking-widest text-gray-400 sm:text-xs">
                    Your Next Adventure
                  </span>
                </div>

                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                    <MapPin className="text-orange-600" size={23} />
                  </div>
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                    Destination
                  </p>
                  <h3 className="mt-1 text-base font-extrabold text-gray-800 sm:text-lg">
                    Explore More
                  </h3>
                </div>

              </div>
            </div>

            {/* Booking Steps */}
            <div className="mt-14">

              <div className="text-center">
                <span className="text-xs font-bold uppercase tracking-[3px] text-red-700">
                  Simple Steps
                </span>

                <h2 className="mt-3 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Start Your Booking
                </h2>

                <p className="mt-3 text-sm text-gray-500">
                  Follow these simple steps to find your perfect flight.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                {[
                  {
                    number: "01",
                    icon: MapPin,
                    title: "Choose Your Route",
                    description: "Enter your departure and destination cities.",
                  },
                  {
                    number: "02",
                    icon: CalendarDays,
                    title: "Pick Your Date",
                    description: "Select your preferred departure and return dates.",
                  },
                  {
                    number: "03",
                    icon: Search,
                    title: "Find Your Flight",
                    description: "Explore available flights and compare fares.",
                  },
                  {
                    number: "04",
                    icon: Ticket,
                    title: "Complete Booking",
                    description: "Select your flight and continue to booking.",
                  },
                ].map((step) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.number}
                      className="group relative rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-700 transition group-hover:bg-red-700 group-hover:text-white">
                          <Icon size={24} />
                        </div>

                        <span className="text-3xl font-extrabold text-gray-100">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="mt-5 text-base font-bold text-gray-800">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {step.description}
                      </p>
                    </div>
                  );
                })}

              </div>
            </div>

            {/* Why Book Section */}
            <div className="mt-14 rounded-2xl bg-gray-50 p-6 sm:p-8">

              <div className="text-center">
                <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
                  Make Every Journey Special
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Get ready for a smooth and convenient booking experience.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">

                <div className="flex flex-col items-center text-center">
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <ShieldCheck size={28} className="text-green-600" />
                  </div>
                  <h3 className="mt-3 font-bold text-gray-800">
                    Secure Experience
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-gray-500">
                    Enjoy a straightforward booking process with secure
                    handling of your booking information.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <Luggage size={28} className="text-red-700" />
                  </div>
                  <h3 className="mt-3 font-bold text-gray-800">
                    Travel Your Way
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-gray-500">
                    Plan your journey and choose options that suit your
                    travel needs.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <Globe2 size={28} className="text-orange-600" />
                  </div>
                  <h3 className="mt-3 font-bold text-gray-800">
                    Explore Destinations
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-gray-500">
                    Discover new places and plan your next memorable trip.
                  </p>
                </div>

              </div>
            </div>

            {/* Main Call To Action */}
            <div className="relative mt-14 overflow-hidden rounded-2xl bg-gradient-to-r from-[#a90000] to-[#e43b20] px-6 py-10 text-center text-white shadow-lg sm:px-10">

              <div className="absolute -right-10 -top-10 opacity-10">
                <Plane size={180} />
              </div>

              <div className="relative z-10">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                  <Plane size={28} />
                </div>

                <h2 className="mt-5 text-2xl font-extrabold sm:text-3xl">
                  Ready to Take Off?
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/85">
                  Your next destination is waiting. Start a fresh flight
                  search and take the first step towards your next adventure.
                </p>

                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="group mt-7 inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-sm font-extrabold text-red-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-orange-50 hover:shadow-xl sm:text-base"
                >
                  <Search size={19} />
                  Search Flights Now
                  <ArrowRight
                    size={19}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-gray-200 bg-white p-6 sm:flex-row">

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50">
                  <Headset className="text-red-700" size={25} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">
                    Need Assistance?
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Start a new search or contact customer support for help.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                <Clock size={16} className="text-red-700" />
                We're here to help
              </div>

            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="py-7 text-center">
          <div className="flex items-center justify-center gap-2 text-sm font-bold tracking-widest text-red-700">
            <Plane size={18} />
            SPICEJET
          </div>

          <p className="mt-2 text-xs text-gray-400">
            Thank you for choosing SpiceJet. We look forward to welcoming you onboard.
          </p>

          <p className="mt-2 text-[10px] text-gray-400">
            © {new Date().getFullYear()} SpiceJet. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
};

export default NoJourneyDetails;
