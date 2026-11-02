import React from "react";
import {
  Gift,
  Plane,
  ArrowRight,
  CheckCircle,
  Wallet,
  CalendarDays,
  Heart,
  HelpCircle,
} from "lucide-react";

const Giftcard = () => {
  const benefits = [
    {
      icon: <Plane size={32} />,
      title: "Give the Gift of Travel",
      description: "Let your loved ones choose their next travel destination.",
    },
    {
      icon: <Wallet size={32} />,
      title: "Flexible Spending",
      description: "Choose a gift card value that suits your budget.",
    },
    {
      icon: <CalendarDays size={32} />,
      title: "Perfect for Every Occasion",
      description: "A thoughtful gift for birthdays, celebrations and holidays.",
    },
  ];

  const faqs = [
    {
      question: "What is a flight gift card?",
      answer:
        "A flight gift card is a prepaid travel gift that can be used towards eligible flight bookings.",
    },
    {
      question: "Can I gift it to someone?",
      answer:
        "Yes. You can purchase a gift card as a special present for friends and family.",
    },
    {
      question: "Can I use the gift card for any destination?",
      answer:
        "Usage depends on the gift card terms, eligible routes and booking conditions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 via-red-600 to-orange-500 px-6 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 md:flex-row">

          <div className="max-w-xl">
            <p className="font-bold uppercase tracking-[4px] text-orange-100">
              SpiceJet Gift Cards
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
              GIVE THE GIFT
              <br />
              OF TRAVEL!
            </h1>

            <p className="mt-5 text-lg leading-8 text-white/90">
              Surprise your loved ones with a journey they will always
              remember. Make every celebration special with the gift
              of unforgettable travel experiences.
            </p>

            <button
              onClick={() =>
                document.getElementById("gift-options")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="mt-8 flex items-center gap-3 rounded-lg bg-white px-7 py-3 font-bold text-red-600 shadow-lg transition hover:bg-gray-100"
            >
              EXPLORE GIFT CARDS <ArrowRight size={20} />
            </button>
          </div>

          {/* Gift Card Illustration */}
          <div className="w-full max-w-md rotate-2 rounded-3xl bg-gradient-to-br from-orange-400 to-red-800 p-8 shadow-2xl">
            <div className="flex items-center justify-between">
              <Gift size={42} />
              <span className="font-extrabold tracking-widest">
                SPICEJET
              </span>
            </div>

            <div className="my-12">
              <p className="text-sm font-semibold tracking-widest text-white/80">
                A JOURNEY FULL OF MEMORIES
              </p>
              <h2 className="mt-3 text-4xl font-extrabold">
                GIFT CARD
              </h2>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs text-white/70">A SPECIAL GIFT FOR YOU</p>
                <p className="mt-1 font-bold">TRAVEL • EXPLORE • ENJOY</p>
              </div>
              <Plane size={42} />
            </div>
          </div>

        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <p className="font-bold uppercase tracking-widest text-orange-500">
          Make Someone Smile
        </p>

        <h2 className="mt-3 text-3xl font-extrabold text-gray-800 md:text-4xl">
          A Perfect Gift for Every Occasion
        </h2>

        <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-500">
          Whether it is a birthday, anniversary, wedding or a special
          celebration, a travel gift card is a wonderful way to inspire
          someone to discover new places and create beautiful memories.
        </p>
      </section>

      {/* Gift Card Options */}
      <section id="gift-options" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Choose Your Gift
          </h2>
          <p className="mt-3 text-gray-500">
            Select a gift value for someone special.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">

          {[
            { amount: "₹2,000", label: "LITTLE SURPRISE", color: "from-orange-400 to-red-500" },
            { amount: "₹5,000", label: "SPECIAL MOMENT", color: "from-red-500 to-red-700" },
            { amount: "₹10,000", label: "GRAND CELEBRATION", color: "from-orange-500 to-orange-700" },
          ].map((card) => (
            <div
              key={card.amount}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`bg-gradient-to-br ${card.color} p-8 text-center text-white`}>
                <Gift size={42} className="mx-auto" />
                <p className="mt-5 text-sm font-bold tracking-widest">
                  {card.label}
                </p>
                <h3 className="mt-3 text-4xl font-extrabold">
                  {card.amount}
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  SPICEJET GIFT CARD
                </p>
              </div>

              <div className="p-6 text-center">
                <p className="text-gray-500">
                  Make their next journey extra special.
                </p>

                <button
                  onClick={() => alert("Gift card purchase is a demo feature.")}
                  className="mt-6 w-full rounded-lg bg-red-600 py-3 font-bold text-white transition hover:bg-red-700"
                >
                  BUY GIFT CARD
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-extrabold text-gray-800">
            Why Choose a Travel Gift Card?
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-red-600">
                  {benefit.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-800">
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

      {/* How It Works */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-3xl font-extrabold text-gray-800">
          How It Works
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            "Choose your gift card value.",
            "Purchase and share the gift with someone special.",
            "The recipient uses it according to the gift card terms.",
          ].map((step, index) => (
            <div key={step} className="rounded-xl bg-white p-7 text-center shadow-md">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-xl font-extrabold text-white">
                {index + 1}
              </div>
              <p className="mt-5 font-semibold leading-7 text-gray-700">
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-extrabold text-gray-800">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <HelpCircle className="shrink-0 text-red-600" size={23} />
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
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-gradient-to-r from-red-700 to-orange-500 px-6 py-12 text-center text-white">
        <Heart size={38} className="mx-auto" />
        <h2 className="mt-4 text-3xl font-extrabold">
          Make Their Next Journey Special!
        </h2>
        <p className="mt-3 text-white/90">
          Give a gift that takes someone somewhere wonderful.
        </p>
      </section>

      <p className="px-6 py-5 text-center text-xs text-gray-400">
        This is a sample gift card page for a frontend project. Gift values,
        purchase actions and terms are illustrative, not verified official
        SpiceJet gift card products.
      </p>

    </div>
  );
};

export default Giftcard;