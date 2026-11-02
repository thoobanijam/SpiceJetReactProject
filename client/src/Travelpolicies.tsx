
import React, { useState } from "react";
import {
  Plane,
  Luggage,
  Clock,
  FileText,
  ShieldCheck,
  Users,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  CalendarCheck,
  RefreshCw,
  Baby,
  HeartHandshake,
  ArrowRight,
  Info,
} from "lucide-react";

const Travelpolicies = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const policies = [
    {
      icon: <Luggage size={30} />,
      title: "Baggage Policy",
      description:
        "Understand cabin baggage and checked baggage guidelines before arriving at the airport.",
      points: [
        "Check the baggage allowance applicable to your ticket.",
        "Keep valuable items and important documents with you.",
        "Ensure your baggage is properly labelled.",
        "Additional baggage charges may apply.",
      ],
    },
    {
      icon: <Clock size={30} />,
      title: "Check-in Policy",
      description:
        "Complete your check-in process on time to make your airport experience smoother.",
      points: [
        "Use online check-in where available.",
        "Keep your booking reference and identification ready.",
        "Arrive at the airport well before departure.",
        "Complete security and boarding procedures on time.",
      ],
    },
    {
      icon: <RefreshCw size={30} />,
      title: "Cancellation & Refunds",
      description:
        "Review the conditions that apply when changing or cancelling your booking.",
      points: [
        "Cancellation charges may depend on your fare type.",
        "Change fees may apply when modifying a booking.",
        "Refund eligibility depends on ticket conditions.",
        "Check your booking details before requesting changes.",
      ],
    },
    {
      icon: <FileText size={30} />,
      title: "Travel Documents",
      description:
        "Carry the necessary identification and travel documents for your journey.",
      points: [
        "Carry a valid government-issued identity document.",
        "International travellers should check passport requirements.",
        "Verify visa and entry requirements before departure.",
        "Keep your ticket and travel confirmation accessible.",
      ],
    },
    {
      icon: <Baby size={30} />,
      title: "Infants & Children",
      description:
        "Prepare for a comfortable journey when travelling with infants and children.",
      points: [
        "Provide accurate passenger details during booking.",
        "Check age-related travel requirements.",
        "Review applicable infant and child baggage rules.",
        "Contact the airline for assistance if required.",
      ],
    },
    {
      icon: <HeartHandshake size={30} />,
      title: "Special Assistance",
      description:
        "Find out how to request support for passengers who need additional assistance.",
      points: [
        "Request assistance in advance whenever possible.",
        "Inform the airline about specific mobility requirements.",
        "Check procedures for travelling with medical equipment.",
        "Contact customer support for individual assistance.",
      ],
    },
  ];

  const faqs = [
    {
      question: "How early should I arrive at the airport?",
      answer:
        "Arrive well before your scheduled departure time to complete check-in, baggage drop, security screening, and boarding. Check your booking confirmation for the applicable reporting time.",
    },
    {
      question: "Can I change my flight after booking?",
      answer:
        "Flight changes may be possible depending on your fare conditions and seat availability. Additional charges or fare differences may apply.",
    },
    {
      question: "How can I check my baggage allowance?",
      answer:
        "Your baggage allowance depends on your route, ticket type, and applicable airline rules. Review your booking confirmation and the airline's official baggage policy.",
    },
    {
      question: "What documents do I need for international travel?",
      answer:
        "International travellers generally need a valid passport and any required visa or entry documents. Requirements depend on your destination and nationality.",
    },
    {
      question: "How can I request special assistance?",
      answer:
        "Contact the airline before your journey and provide details about the assistance you require. Early requests help the airline understand your needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f7f8] text-gray-800">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#8f1d1d] via-[#c92c22] to-[#f15a24] px-6 py-20 text-white md:py-28">

        <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[45px] border-white/10" />
        <div className="absolute -bottom-36 left-10 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold tracking-wider">
            <ShieldCheck size={18} />
            TRAVEL WITH CONFIDENCE
          </div>

          <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            YOUR JOURNEY,
            <span className="block text-yellow-300">
              YOUR SAFETY.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
            Everything you need to know before you fly. Explore important
            travel guidelines, baggage information, check-in procedures,
            booking conditions, and passenger assistance.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("travel-guidelines")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-9 flex items-center gap-3 rounded-lg bg-white px-7 py-4 font-bold text-red-700 transition hover:bg-yellow-300"
          >
            Explore Travel Policies
            <ArrowRight size={19} />
          </button>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center">

        <p className="font-bold uppercase tracking-[4px] text-orange-600">
          Important Information
        </p>

        <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
          Plan Your Journey the Right Way
        </h2>

        <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-500">
          A little preparation can make your travel experience easier.
          Familiarise yourself with the important guidelines below before
          heading to the airport.
        </p>

      </section>

      {/* QUICK INFORMATION CARDS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
              <Plane size={25} />
            </div>
            <h3 className="mt-5 font-bold text-gray-900">
              Before You Fly
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Check your booking and travel requirements.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">
              <Luggage size={25} />
            </div>
            <h3 className="mt-5 font-bold text-gray-900">
              Baggage Information
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Understand baggage allowances and restrictions.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <CalendarCheck size={25} />
            </div>
            <h3 className="mt-5 font-bold text-gray-900">
              Booking Guidelines
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Review changes, cancellations, and refunds.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
              <Users size={25} />
            </div>
            <h3 className="mt-5 font-bold text-gray-900">
              Passenger Support
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Find guidance for different passenger needs.
            </p>
          </div>

        </div>
      </section>

      {/* TRAVEL GUIDELINES */}
      <section id="travel-guidelines" className="bg-white px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="font-bold uppercase tracking-[3px] text-orange-600">
              Know Before You Go
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Travel Policies & Guidelines
            </h2>

            <p className="mt-4 text-gray-500">
              Important information to help you prepare for your flight.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {policies.map((policy, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-[#fafafa] p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:bg-white hover:shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                  {policy.icon}
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-gray-900">
                  {policy.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {policy.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {policy.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-2 text-sm leading-6 text-gray-600"
                    >
                      <span className="mt-1 text-orange-500">
                        <ShieldCheck size={16} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <section className="px-6 py-16">

        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-2xl border border-orange-200 bg-orange-50 p-7 md:flex-row md:items-center md:p-10">

          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
            <AlertCircle size={34} />
          </div>

          <div>
            <h3 className="text-xl font-extrabold text-gray-900">
              Important Travel Notice
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              Travel policies, baggage allowances, fees, and passenger
              requirements can change. Always check the latest official
              airline information and your ticket conditions before travelling.
            </p>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-4xl">

          <div className="mb-12 text-center">
            <p className="font-bold uppercase tracking-[3px] text-orange-600">
              Need More Information?
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-gray-500">
              Find answers to common travel policy questions.
            </p>
          </div>

          <div className="space-y-4">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white"
              >

                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-orange-50 md:p-6"
                >
                  <span className="font-bold text-gray-900">
                    {faq.question}
                  </span>

                  {openFaq === index ? (
                    <ChevronUp className="shrink-0 text-orange-600" />
                  ) : (
                    <ChevronDown className="shrink-0 text-orange-600" />
                  )}
                </button>

                {openFaq === index && (
                  <div className="border-t border-gray-100 px-6 py-5 text-sm leading-7 text-gray-600">
                    {faq.answer}
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section className="px-6 pb-20">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#a51e22] to-[#f15a24] px-8 py-14 text-center text-white md:px-16">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
            <Info size={34} />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold md:text-4xl">
            Need Help With Your Travel Plans?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
            Have questions about baggage, booking changes, refunds, or
            passenger assistance? Contact our team for further information.
          </p>

          <button
            onClick={() => (window.location.href = "/contact")}
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-white px-8 py-4 font-bold text-red-700 transition hover:bg-yellow-300"
          >
            Contact Us
            <ArrowRight size={19} />
          </button>

        </div>
      </section>

      {/* BOTTOM NOTE */}
      <div className="border-t border-gray-200 bg-white px-6 py-6 text-center text-xs leading-6 text-gray-400">
        This page provides general illustrative travel guidance, not official
        SpiceJet policy terms. Refer to the airline's official website and
        your booking conditions for current rules.
      </div>

    </div>
  );
};

export default Travelpolicies;