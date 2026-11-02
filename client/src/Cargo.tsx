
import React from "react";
import {
  Plane,
  Package,
  Truck,
  Globe,
  ShieldCheck,
  Clock,
  ArrowRight,
  Boxes,
  MapPin,
  Headphones,
  CheckCircle,
} from "lucide-react";

const Cargo = () => {
  const services = [
    {
      icon: <Package size={30} />,
      title: "General Cargo",
      description:
        "Reliable transportation for everyday shipments, packages, and commercial goods.",
    },
    {
      icon: <Globe size={30} />,
      title: "International Cargo",
      description:
        "Connect your business to global destinations with dependable air cargo services.",
    },
    {
      icon: <Boxes size={30} />,
      title: "Special Cargo",
      description:
        "Careful handling and transportation solutions for special shipping requirements.",
    },
    {
      icon: <Truck size={30} />,
      title: "Express Delivery",
      description:
        "Fast shipping solutions for time-sensitive deliveries and urgent consignments.",
    },
  ];

  const benefits = [
    {
      icon: <Clock size={28} />,
      title: "On-Time Delivery",
      description: "Move your shipments with speed and efficiency.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Safe Handling",
      description: "Careful handling throughout the shipping journey.",
    },
    {
      icon: <Globe size={28} />,
      title: "Wide Connectivity",
      description: "Reach destinations through air cargo networks.",
    },
    {
      icon: <Headphones size={28} />,
      title: "Customer Support",
      description: "Get assistance with your cargo-related queries.",
    },
  ];

  const steps = [
    "Book your cargo shipment",
    "Prepare and submit your package",
    "Cargo inspection and processing",
    "Shipment transportation",
    "Delivery to the destination",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#171923] via-[#29202a] to-[#8f241d] px-6 py-24 text-white md:py-32">

        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl"></div>
        <div className="absolute -bottom-24 left-20 h-72 w-72 rounded-full bg-red-600/20 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-300/40 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300">
              <Plane size={17} />
              SPICEJET CARGO SERVICES
            </p>

            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              YOUR CARGO.
              <span className="block text-orange-400">
                OUR PRIORITY.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 md:text-lg">
              Connecting businesses and destinations through reliable air
              cargo solutions. Move your goods with confidence, speed, and
              care.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("cargo-services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 rounded-lg bg-orange-500 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600"
              >
                Explore Services
                <ArrowRight size={19} />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("cargo-contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-lg border border-white/50 px-7 py-3.5 font-bold text-white transition hover:bg-white hover:text-gray-900"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="relative mx-auto flex h-72 w-full max-w-lg items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm md:h-96">
            <div className="absolute inset-5 rounded-2xl border border-dashed border-orange-300/30"></div>

            <div className="relative flex flex-col items-center">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-600 shadow-2xl shadow-orange-500/30 md:h-44 md:w-44">
                <Package size={85} strokeWidth={1.5} />
              </div>
              <p className="mt-7 text-xl font-bold tracking-widest">
                CARGO CONNECT
              </p>
              <p className="mt-2 text-sm text-gray-300">
                Moving possibilities forward
              </p>
            </div>

            <Plane
              size={45}
              className="absolute right-10 top-10 rotate-12 text-orange-400"
            />
            <Boxes
              size={35}
              className="absolute bottom-10 left-10 text-orange-300"
            />
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="font-bold uppercase tracking-[4px] text-orange-600">
          Moving Business Forward
        </p>

        <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
          Cargo Solutions That Keep You Moving
        </h2>

        <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-500">
          Whether you are shipping business products, commercial goods, or
          important packages, air cargo provides a convenient way to move
          shipments between destinations. Discover cargo solutions designed
          to support your shipping needs.
        </p>
      </section>

      {/* SERVICES */}
      <section id="cargo-services" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="font-bold uppercase tracking-[3px] text-orange-600">
              What We Offer
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Our Cargo Services
            </h2>
            <p className="mt-4 text-gray-500">
              Flexible cargo solutions for different shipping requirements.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-gray-50 p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 font-semibold text-orange-600">
                  Learn More
                  <ArrowRight size={17} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#171923] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="font-bold uppercase tracking-[3px] text-orange-400">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              A Better Way to Ship
            </h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                  {benefit.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-14 text-center">
            <p className="font-bold uppercase tracking-[3px] text-orange-600">
              Simple Process
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
              How Cargo Shipping Works
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-lg font-extrabold text-white">
                  {index + 1}
                </div>

                <p className="mt-5 font-semibold leading-7 text-gray-800">
                  {step}
                </p>

                {index !== steps.length - 1 && (
                  <ArrowRight
                    size={20}
                    className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-orange-500 md:block"
                  />
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT BANNER */}
      <section id="cargo-contact" className="px-6 pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-orange-600 to-red-600 px-8 py-14 text-white md:px-16">

          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10"></div>

          <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <p className="font-bold uppercase tracking-[3px] text-orange-100">
                Let's Get Moving
              </p>

              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                Ready to Ship Your Cargo?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-white/85">
                Have questions about cargo services or shipment requirements?
                Get in touch with our team for more information.
              </p>
            </div>

            <button
              onClick={() =>
                (window.location.href = "/contact")
              }
              className="flex shrink-0 items-center gap-3 rounded-lg bg-white px-7 py-4 font-bold text-orange-600 shadow-lg transition hover:bg-gray-100"
            >
              Contact Our Team
              <ArrowRight size={19} />
            </button>
          </div>

        </div>
      </section>

      {/* FOOTER NOTE */}
      <div className="border-t border-gray-200 bg-white px-6 py-6 text-center text-sm text-gray-400">
        <div className="flex items-center justify-center gap-2">
          <MapPin size={16} />
          Cargo services and availability depend on route and shipment requirements.
        </div>
      </div>

    </div>
  );
};

export default Cargo;
