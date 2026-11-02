
import React from "react";
import {
  Plane,
  Crown,
  Users,
  BriefcaseBusiness,
  Globe,
  Clock,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  CalendarDays,
  Headphones,
  MapPin,
  Luggage,
} from "lucide-react";

const Charter = () => {
  const services = [
    {
      icon: <BriefcaseBusiness size={32} />,
      title: "Corporate Charters",
      description:
        "Convenient flight arrangements for business meetings, corporate events, and executive travel.",
    },
    {
      icon: <Users size={32} />,
      title: "Group Charters",
      description:
        "Travel together with customised flight arrangements for groups, teams, and organisations.",
    },
    {
      icon: <Crown size={32} />,
      title: "Private Charters",
      description:
        "Enjoy a more personalised travel experience with charter flight arrangements.",
    },
    {
      icon: <Globe size={32} />,
      title: "Special Occasion Travel",
      description:
        "Explore charter options for celebrations, events, tours, and special journeys.",
    },
  ];

  const benefits = [
    {
      icon: <Clock size={30} />,
      title: "Flexible Scheduling",
      description:
        "Plan travel arrangements around your preferred schedule and requirements.",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Reliable Service",
      description:
        "Get assistance with planning and organising your charter requirements.",
    },
    {
      icon: <Users size={30} />,
      title: "Group Convenience",
      description:
        "Coordinate travel arrangements for your team or group in one place.",
    },
    {
      icon: <Headphones size={30} />,
      title: "Personal Assistance",
      description:
        "Receive support throughout your charter enquiry and planning process.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Share Your Requirements",
      description: "Tell us your destination, travel dates, and group size.",
    },
    {
      number: "02",
      title: "Receive a Proposal",
      description: "Discuss available options based on your travel needs.",
    },
    {
      number: "03",
      title: "Confirm Your Booking",
      description: "Review and confirm the agreed charter arrangements.",
    },
    {
      number: "04",
      title: "Get Ready to Fly",
      description: "Prepare for your journey with the necessary travel details.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f7f8] text-gray-800">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#101827] px-6 py-24 text-white md:py-32">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[55px] border-orange-500/10"></div>
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-sm font-semibold tracking-widest text-yellow-300">
              <Crown size={17} />
              PREMIUM CHARTER SERVICES
            </div>

            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              FLY YOUR WAY.
              <span className="mt-2 block text-orange-400">
                YOUR JOURNEY.
              </span>
              <span className="block text-yellow-300">
                YOUR CHOICE.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-300 md:text-lg">
              Discover personalised charter travel solutions for business,
              groups, and special journeys. Enjoy greater flexibility and
              travel arrangements designed around your needs.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("charter-enquiry")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-3 rounded-lg bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                Request a Charter
                <ArrowRight size={19} />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("charter-services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-lg border border-white/40 px-7 py-4 font-bold transition hover:bg-white hover:text-gray-900"
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto flex h-80 w-full max-w-lg items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-[#26364c] to-[#171e2b] md:h-[420px]">

            <div className="absolute inset-5 rounded-2xl border border-dashed border-yellow-400/30"></div>

            <div className="relative flex flex-col items-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-full border border-yellow-300/30 bg-gradient-to-br from-yellow-400 to-orange-600 shadow-2xl shadow-orange-500/20 md:h-48 md:w-48">
                <Plane size={100} strokeWidth={1.3} className="-rotate-12 text-white" />
              </div>

              <p className="mt-8 text-xl font-extrabold tracking-[5px] text-yellow-300">
                CHARTER
              </p>

              <p className="mt-2 text-sm tracking-widest text-gray-300">
                BEYOND ORDINARY TRAVEL
              </p>
            </div>

            <Crown
              size={35}
              className="absolute right-10 top-10 text-yellow-400"
            />

            <Luggage
              size={35}
              className="absolute bottom-10 left-10 text-orange-300"
            />
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">

        <p className="font-bold uppercase tracking-[4px] text-orange-600">
          Travel Without Limits
        </p>

        <h2 className="mt-4 text-3xl font-extrabold text-[#101827] md:text-4xl">
          A More Personal Way to Fly
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-500">
          Every journey has different requirements. Whether you are planning
          an important business trip, arranging group travel, or organising
          a special occasion, charter services offer an alternative way to
          plan your flight experience.
        </p>

      </section>

      {/* SERVICES */}
      <section id="charter-services" className="bg-white px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="font-bold uppercase tracking-[3px] text-orange-600">
              Explore Our Options
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#101827] md:text-4xl">
              Charter Services
            </h2>

            <p className="mt-4 text-gray-500">
              Travel solutions for different occasions and requirements.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-[#f8f8fa] p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#101827] text-yellow-400 transition group-hover:bg-orange-500 group-hover:text-white">
                  {service.icon}
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#101827]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {service.description}
                </p>

                <button
                  onClick={() =>
                    document
                      .getElementById("charter-enquiry")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="mt-6 flex items-center gap-2 font-bold text-orange-600 transition group-hover:gap-4"
                >
                  Enquire Now
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PREMIUM BANNER */}
      <section className="overflow-hidden bg-[#101827] px-6 py-20 text-white">

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div>
            <p className="font-bold uppercase tracking-[3px] text-yellow-400">
              Designed Around You
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
              Your Journey Deserves
              <span className="block text-orange-400">
                A Personal Touch.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              From the first enquiry to your travel arrangements, explore
              charter options that can be discussed according to your
              schedule, destination, and group requirements.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Travel planning based on your requirements",
                "Options for business and group journeys",
                "Dedicated enquiry and booking assistance",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="shrink-0 text-yellow-400" size={21} />
                  <p className="text-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[330px] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-[#273951] to-[#182232] p-10">

            <div className="absolute h-64 w-64 rounded-full border border-yellow-400/20"></div>
            <div className="absolute h-48 w-48 rounded-full border border-orange-400/30"></div>

            <div className="relative text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-xl">
                <Plane size={55} className="text-white" />
              </div>

              <h3 className="mt-7 text-2xl font-extrabold">
                Beyond the Ordinary
              </h3>

              <p className="mt-3 text-gray-300">
                Make every journey count.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="font-bold uppercase tracking-[3px] text-orange-600">
              The Charter Advantage
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#101827] md:text-4xl">
              Why Consider Charter Travel?
            </h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  {benefit.icon}
                </div>

                <h3 className="mt-6 text-lg font-extrabold text-[#101827]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {benefit.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* BOOKING PROCESS */}
      <section className="bg-[#f0f1f3] px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="font-bold uppercase tracking-[3px] text-orange-600">
              Start Your Journey
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#101827] md:text-4xl">
              How It Works
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <p className="text-4xl font-extrabold text-orange-500/30">
                  {step.number}
                </p>

                <h3 className="mt-5 text-lg font-bold text-[#101827]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {step.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ENQUIRY SECTION */}
      <section id="charter-enquiry" className="px-6 py-20">

        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">

          <div className="bg-gradient-to-br from-[#101827] to-[#29364a] p-9 text-white md:p-14">

            <p className="font-bold uppercase tracking-[3px] text-yellow-400">
              Let's Plan Together
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl">
              Tell Us About Your Next Journey
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              Share your charter travel requirements with our team. We can
              help you explore the available arrangements for your journey.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/10 p-3 text-yellow-400">
                  <CalendarDays size={24} />
                </div>
                <div>
                  <p className="font-bold">Flexible Planning</p>
                  <p className="text-sm text-gray-400">
                    Discuss your preferred travel dates.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/10 p-3 text-yellow-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold">Your Destination</p>
                  <p className="text-sm text-gray-400">
                    Tell us where you want to travel.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="p-9 md:p-14">

            <h3 className="text-2xl font-extrabold text-[#101827]">
              Request a Charter Enquiry
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Contact our team to discuss your requirements.
            </p>

            <div className="mt-8 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="Enter your destination"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Number of Passengers
                </label>
                <input
                  type="number"
                  min="1"
                  placeholder="Enter passenger count"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <button
                onClick={() =>
                  (window.location.href = "/contact")
                }
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                Submit Enquiry
                <ArrowRight size={19} />
              </button>

              <p className="text-center text-xs leading-5 text-gray-400">
                This is a demonstration enquiry form. Connect it to your
                backend to submit and store actual enquiries.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="bg-orange-500 px-6 py-12 text-center text-white">
        <h2 className="text-2xl font-extrabold md:text-3xl">
          Your Journey. Your Schedule. Your Way.
        </h2>

        <p className="mt-3 text-white/90">
          Explore charter travel possibilities for your next journey.
        </p>
      </section>

    </div>
  );
};

export default Charter;
