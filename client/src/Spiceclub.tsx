import React from "react";
import {
  Plane,
  Gift,
  Star,
  Award,
  Wallet,
  ArrowRight,
  CheckCircle,
  Ticket,
  Sparkles,
  Crown,
  ShieldCheck,
} from "lucide-react";

const Spiceclub = () => {
  const benefits = [
    {
      icon: <Plane size={35} />,
      title: "Earn SpiceClub Points",
      description:
        "Earn reward points on eligible bookings and enjoy more benefits as you travel.",
    },
    {
      icon: <Gift size={35} />,
      title: "Exciting Rewards",
      description:
        "Redeem your accumulated points for eligible rewards and travel benefits.",
    },
    {
      icon: <Star size={35} />,
      title: "Exclusive Privileges",
      description:
        "Enjoy access to special offers and member-exclusive promotions.",
    },
    {
      icon: <Wallet size={35} />,
      title: "More Travel Value",
      description:
        "Make your journeys more rewarding with every eligible transaction.",
    },
  ];

  const tiers = [
    {
      name: "SPICE CLUB",
      subtitle: "Start Your Journey",
      icon: <Star size={35} />,
      color: "from-orange-400 to-orange-600",
      benefits: [
        "Access to member offers",
        "Earn eligible reward points",
        "Special travel promotions",
      ],
    },
    {
      name: "SPICE PLUS",
      subtitle: "Enjoy More Benefits",
      icon: <Award size={35} />,
      color: "from-red-500 to-red-700",
      benefits: [
        "Additional member privileges",
        "Exclusive promotional offers",
        "More rewarding travel experiences",
      ],
    },
    {
      name: "SPICE PREMIUM",
      subtitle: "A Premium Experience",
      icon: <Crown size={35} />,
      color: "from-gray-700 to-gray-950",
      benefits: [
        "Premium member privileges",
        "Priority-related benefits where eligible",
        "Exclusive travel experiences",
      ],
    },
  ];

  const faqs = [
    {
      question: "What is SpiceClub?",
      answer:
        "SpiceClub is a frequent flyer loyalty programme designed to reward eligible members for their travel activities.",
    },
    {
      question: "How can I earn reward points?",
      answer:
        "Members can earn points through eligible bookings and transactions according to the programme rules.",
    },
    {
      question: "Can I redeem my points?",
      answer:
        "Eligible accumulated points can be redeemed according to the applicable SpiceClub programme terms.",
    },
    {
      question: "Can I join SpiceClub?",
      answer:
        "Check the official SpiceJet website for current membership eligibility and registration details.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-orange-500 px-6 py-20 text-white">

        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/10" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 md:flex-row">

          <div className="max-w-2xl">
            <div className="flex items-center gap-2 font-bold uppercase tracking-[4px] text-orange-100">
              <Sparkles size={20} />
              SpiceJet Loyalty Programme
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              WELCOME TO
              <br />
              <span className="text-yellow-300">SPICECLUB!</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/90">
              Every journey brings you closer to exciting rewards.
              Become a SpiceClub member and make your travel experiences
              more rewarding.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => alert("Membership registration demo")}
                className="flex items-center gap-3 rounded-lg bg-white px-7 py-3 font-bold text-red-600 shadow-xl transition hover:bg-orange-100"
              >
                JOIN SPICECLUB <ArrowRight size={20} />
              </button>

              <button
                onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-lg border-2 border-white px-7 py-3 font-bold text-white transition hover:bg-white hover:text-red-600"
              >
                EXPLORE BENEFITS
              </button>
            </div>
          </div>

          {/* Membership Card */}
          <div className="w-full max-w-md rotate-3 rounded-3xl border border-white/30 bg-gradient-to-br from-orange-400 via-red-600 to-red-900 p-8 shadow-2xl">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold tracking-[3px]">SPICEJET</p>
                <h2 className="mt-1 text-3xl font-extrabold">SPICECLUB</h2>
              </div>
              <Crown size={48} className="text-yellow-300" />
            </div>

            <div className="my-12">
              <p className="text-sm tracking-widest text-white/70">
                YOUR TRAVEL REWARDS MEMBERSHIP
              </p>
              <h3 className="mt-3 text-4xl font-extrabold">
                FLY MORE.
                <br />
                EARN MORE.
              </h3>
            </div>

            <div className="flex items-center justify-between border-t border-white/30 pt-5">
              <div>
                <p className="text-xs text-white/70">MEMBER BENEFITS</p>
                <p className="mt-1 font-bold">REWARDS & PRIVILEGES</p>
              </div>
              <Plane size={38} />
            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">

        <p className="font-bold uppercase tracking-widest text-orange-500">
          Travel More. Earn More.
        </p>

        <h2 className="mt-3 text-3xl font-extrabold text-gray-800 md:text-4xl">
          Your Journey Deserves Rewards
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-500">
          SpiceClub brings more value to your travel experience.
          Discover member benefits, collect eligible reward points
          and enjoy exciting opportunities every time you fly.
        </p>

      </section>

      {/* BENEFITS */}
      <section id="benefits" className="bg-white py-16">

        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-orange-500">
              Member Privileges
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-800">
              Why Join SpiceClub?
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-red-600">
                  {benefit.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-800">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-500">
                  {benefit.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="text-center">
          <p className="font-bold uppercase tracking-widest text-orange-500">
            Simple & Rewarding
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-gray-800">
            How SpiceClub Works
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {[
            {
              icon: <CheckCircle size={35} />,
              title: "01. Join the Club",
              description:
                "Register for the loyalty programme and become a member.",
            },
            {
              icon: <Plane size={35} />,
              title: "02. Travel & Earn",
              description:
                "Book eligible flights and earn reward points according to programme rules.",
            },
            {
              icon: <Gift size={35} />,
              title: "03. Enjoy Rewards",
              description:
                "Explore eligible rewards and redeem points according to the terms.",
            },
          ].map((step) => (
            <div
              key={step.title}
              className="rounded-2xl bg-white p-8 text-center shadow-lg"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-600">
                {step.icon}
              </div>

              <h3 className="mt-6 text-xl font-extrabold text-gray-800">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* MEMBERSHIP TIERS */}
      <section className="bg-gray-100 py-16">

        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-orange-500">
              Discover Membership
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-800">
              Explore Membership Benefits
            </h2>

            <p className="mt-3 text-gray-500">
              Discover the different levels of travel privileges.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className={`bg-gradient-to-r ${tier.color} p-8 text-center text-white`}>
                  <div className="flex justify-center">{tier.icon}</div>

                  <h3 className="mt-4 text-2xl font-extrabold">
                    {tier.name}
                  </h3>

                  <p className="mt-2 text-sm text-white/80">
                    {tier.subtitle}
                  </p>
                </div>

                <div className="p-7">
                  <ul className="space-y-4">
                    {tier.benefits.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-600">
                        <CheckCircle size={20} className="mt-1 shrink-0 text-green-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => alert("Membership details demo")}
                    className="mt-8 w-full rounded-lg bg-red-600 py-3 font-bold text-white transition hover:bg-red-700"
                  >
                    EXPLORE BENEFITS
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* REWARDS BANNER */}
      <section className="bg-gradient-to-r from-red-700 to-orange-500 px-6 py-16 text-white">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">

          <div>
            <div className="flex items-center gap-3">
              <Ticket size={35} />
              <p className="font-bold uppercase tracking-widest">
                Exclusive Member Offers
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Your Next Adventure Starts Here!
            </h2>

            <p className="mt-4 max-w-2xl text-white/90">
              Become part of the SpiceClub community and discover
              exciting travel opportunities.
            </p>
          </div>

          <button
            onClick={() => window.location.href = "/"}
            className="shrink-0 rounded-lg bg-white px-8 py-4 font-extrabold text-red-600 shadow-lg transition hover:bg-orange-100"
          >
            BOOK A FLIGHT
          </button>

        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-16">

        <h2 className="text-center text-3xl font-extrabold text-gray-800">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-5">

          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck size={24} className="shrink-0 text-red-600" />

                <h3 className="font-bold text-gray-800">
                  {faq.question}
                </h3>
              </div>

              <p className="mt-3 pl-9 leading-7 text-gray-500">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* DISCLAIMER */}
      <p className="px-6 pb-8 text-center text-xs text-gray-400">
        This page is a sample frontend design. Membership tiers, privileges
        and reward descriptions are illustrative and are not verified official
        SpiceJet programme terms.
      </p>

    </div>
  );
};

export default Spiceclub;