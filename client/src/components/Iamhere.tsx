
import { useState, useEffect, useRef } from "react";

const Iamhere = () => {
  const iams = [
    { image: "img/chng.png", title: "Change Assist" },
    { image: "img/spiceclub.png", title: "SpiceClub" },
    { image: "img/spicejet.png", title: "Spicejet Axis Credit Card" },
    { image: "img/visaservice.png", title: "Visa Service" },
    { image: "img/gst.png", title: "GST Invoice" },
  ];

  const announcements = [
    "Winter schedule takes effect from 25th October. Please check your flight status for any timing changes.",
    "Due to ongoing developments in the Middle East region, some flights may be impacted. Please check your flight status for updates.",
    "Passengers carrying arms & ammunition must request clearance at least 72 hours before departure. Email custrelations@spicejet.com for assistance. Read more.",
    "Use our Change Assist portal for easy rescheduling or refunds for your affected flight.",
    "Only 1 piece of hand baggage of up to 7 kg is permitted on all SpiceJet flights. Power banks/portable mobile chargers are ONLY allowed in Cabin Baggage. E-cigarettes are prohibited in Cabin as well as Checked-in Baggage.",
    "With DigiYatra, enjoy quick and easy entry to the airport, and pre-security check with your face as your boarding pass for the next SpiceJet flight at select cities. Know more.",
  ];

  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const firstTimeout = setTimeout(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcements.length);

      intervalRef.current = setInterval(() => {
        setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
      }, 6000);
    }, 3000);

    return () => {
      clearTimeout(firstTimeout);

      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* Responsive announcements */}
      <div className="flex min-h-20 w-full  items-center overflow-hidden bg-[#f8f8f8] sm:min-h-24">
        <div
          className="flex w-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${announcementIndex * 100}%)`,
          }}
        >
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="flex min-h-20 w-full shrink-0 items-center justify-center px-4 py-3 sm:min-h-24 sm:px-8"
            >
              <p className="text-center text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
                {announcement}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive I Am Here section */}
      <div className="flex w-full flex-col items-center bg-white px-3 py-8 sm:px-6 sm:py-10 lg:py-12">
        <h6 className="text-center text-2xl font-bold text-red-600 sm:text-3xl">
          I Am Here For...
        </h6>

        <div className="mt-5 grid w-full grid-cols-2 gap-x-3 gap-y-8 rounded-xl p-4 sm:grid-cols-3 sm:gap-6 sm:p-6 lg:grid-cols-5 lg:gap-5 lg:p-8">
          {iams.map((iam) => (
            <div
              key={iam.title}
              className="flex min-w-0 flex-col items-center justify-start gap-3"
            >
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#e9e3e3] p-4 shadow-lg shadow-gray-300 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
                <img
                  src={`/${iam.image}`}
                  alt={iam.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <h6 className="mt-1 text-center text-sm font-bold leading-snug sm:text-base lg:text-lg">
                {iam.title}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Iamhere;
