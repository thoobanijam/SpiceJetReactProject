import React from "react";
import {
  Play,
  Film,
  Headphones,
  MonitorPlay,
  Plane,
  Tv,
  Music,
  ArrowRight,
  Sparkles,
  CirclePlay,
} from "lucide-react";

const Spicescreen = () => {
  const categories = [
    {
      icon: <Film size={30} />,
      title: "Movies",
      description: "Discover exciting movie entertainment for your journey.",
    },
    {
      icon: <Tv size={30} />,
      title: "TV Shows",
      description: "Enjoy interesting shows and entertainment programmes.",
    },
    {
      icon: <Music size={30} />,
      title: "Music",
      description: "Relax with music and audio entertainment.",
    },
    {
      icon: <Headphones size={30} />,
      title: "Audio",
      description: "Enjoy audio experiences while travelling.",
    },
  ];

  const featured = [
    {
      image: "/img/screen1.jpg",
      category: "CINEMA",
      title: "A World of Movies",
      description: "Discover stories, adventure and entertainment.",
    },
    {
      image: "/img/screen2.jpg",
      category: "ENTERTAINMENT",
      title: "Your Favourite Shows",
      description: "Explore engaging shows during your journey.",
    },
    {
      image: "/img/screen3.jpg",
      category: "MUSIC",
      title: "Travel with Music",
      description: "Settle in and enjoy your favourite sounds.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#080d18] text-white">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#101a35] via-[#10101e] to-black px-6 py-24">

        <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute -bottom-20 left-10 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-5 py-2 text-sm font-bold tracking-widest text-purple-300">
              <Sparkles size={18} />
              ENTERTAINMENT ABOVE THE CLOUDS
            </div>

            <h1 className="mt-7 text-5xl font-extrabold leading-tight md:text-7xl">
              YOUR FLIGHT.
              <br />
              YOUR
              <span className="text-orange-400"> SCREEN.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-300">
              Make every journey more enjoyable. Explore a world of
              entertainment, music and exciting experiences while
              you travel.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() =>
                  document.getElementById("explore")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="flex items-center gap-3 rounded-lg bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                EXPLORE MORE <ArrowRight size={20} />
              </button>

              <button
                onClick={() => alert("SpiceScreen entertainment demo")}
                className="flex items-center gap-3 rounded-lg border border-white/40 px-7 py-4 font-bold transition hover:bg-white hover:text-black"
              >
                <Play size={19} /> WATCH NOW
              </button>
            </div>
          </div>

          {/* SCREEN ILLUSTRATION */}
          <div className="relative mx-auto w-full max-w-lg">

            <div className="absolute -inset-5 rounded-full bg-purple-600/20 blur-3xl" />

            <div className="relative rounded-[35px] border border-white/20 bg-gradient-to-br from-gray-700 to-black p-4 shadow-2xl">

              <div className="overflow-hidden rounded-[25px] bg-gradient-to-br from-indigo-900 via-purple-900 to-orange-700 p-8">

                <div className="flex items-center justify-between">
                  <span className="font-extrabold tracking-widest">
                    SPICESCREEN
                  </span>
                  <MonitorPlay size={30} />
                </div>

                <div className="flex h-64 flex-col items-center justify-center text-center">
                  <CirclePlay size={75} className="text-orange-300" />

                  <h2 className="mt-5 text-4xl font-extrabold">
                    ENTERTAINMENT
                  </h2>

                  <p className="mt-3 text-sm tracking-[4px] text-white/70">
                    BEYOND THE JOURNEY
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/30 pt-5 text-sm">
                  <span>DISCOVER</span>
                  <span>ENJOY YOUR FLIGHT</span>
                </div>

              </div>
            </div>

            <div className="absolute -bottom-7 -left-5 rounded-xl border border-white/20 bg-[#20263b] p-5 shadow-xl">
              <Headphones size={32} className="text-orange-400" />
              <p className="mt-2 font-bold">RELAX & ENJOY</p>
            </div>

          </div>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section id="explore" className="mx-auto max-w-6xl px-6 py-20">

        <div className="text-center">
          <p className="font-bold tracking-[4px] text-orange-400">
            ENTERTAINMENT ZONE
          </p>

          <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
            Explore Your Entertainment
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            Find something you love and make your travel time
            an enjoyable part of your adventure.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-white/10 bg-[#151c2e] p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-400/60 hover:bg-[#202a40]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400 transition group-hover:bg-orange-500 group-hover:text-white">
                {category.icon}
              </div>

              <h3 className="mt-6 text-xl font-extrabold">
                {category.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {category.description}
              </p>

              <div className="mt-6 flex items-center gap-2 font-bold text-orange-400">
                EXPLORE <ArrowRight size={17} />
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="bg-[#111827] py-20">

        <div className="mx-auto max-w-6xl px-6">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-bold tracking-[4px] text-orange-400">
                FEATURED EXPERIENCES
              </p>

              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                Something for Every Mood
              </h2>
            </div>

            <p className="max-w-md leading-7 text-gray-400">
              Explore different entertainment experiences
              and find your favourite way to spend your journey.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {featured.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#1b2435] transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-purple-900 to-orange-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                      <Play size={30} fill="white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold tracking-[3px] text-orange-400">
                    {item.category}
                  </p>

                  <h3 className="mt-3 text-xl font-extrabold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">

        <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-indigo-900 to-[#111827] p-10">

          <div className="absolute h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="relative text-center">
            <MonitorPlay size={90} className="mx-auto text-orange-400" />
            <h3 className="mt-6 text-3xl font-extrabold">
              A NEW WAY TO FLY
            </h3>
            <p className="mt-3 text-gray-300">
              Entertainment makes every moment count.
            </p>
          </div>

        </div>

        <div>
          <p className="font-bold tracking-[4px] text-orange-400">
            THE SPICESCREEN EXPERIENCE
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
            Turn Your Travel Time Into Enjoyment
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            From relaxing audio to exciting entertainment,
            discover ways to make your journey feel shorter
            and more enjoyable.
          </p>

          <div className="mt-8 space-y-5">

            {[
              "Entertainment-inspired travel experience",
              "Options for different moods and interests",
              "Enjoyable moments throughout your journey",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
                  <Play size={15} fill="currentColor" />
                </div>
                <p className="text-gray-300">{item}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-800 px-6 py-16 text-center">

        <div className="mx-auto max-w-3xl">
          <Plane size={45} className="mx-auto" />

          <h2 className="mt-6 text-3xl font-extrabold md:text-5xl">
            THE JOURNEY IS MORE THAN JUST FLYING
          </h2>

          <p className="mt-5 leading-8 text-white/90">
            Discover a different kind of travel experience
            with entertainment-inspired moments.
          </p>

          <button
            onClick={() => window.location.href = "/"}
            className="mt-8 rounded-lg bg-white px-9 py-4 font-extrabold text-red-600 transition hover:bg-gray-100"
          >
            BOOK YOUR FLIGHT
          </button>
        </div>

      </section>

      {/* DISCLAIMER */}
      <p className="bg-[#080d18] px-6 py-6 text-center text-xs text-gray-500">
        This page is a sample entertainment-themed frontend design.
        Images and entertainment features are illustrative and do not
        confirm actual SpiceJet onboard services.
      </p>

    </div>
  );
};

export default Spicescreen;