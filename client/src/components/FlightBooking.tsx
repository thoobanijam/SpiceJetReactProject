import { useState, useEffect, useRef } from "react";
import {useNavigate } from "react-router-dom"
import Iamhere from "./Iamhere.jsx";
import Spintowin from "./Spintowin.js";
import Irresistibledeals from "./Irresistibledeals.js";
import Recommended from "./Recommended.js";
import SpiceClubLoyalty from "./SpiceClubLoyalty.js";
import Cargo from "./Cargo.js";
import {
  Plane,
  CircleCheck,
  SlidersHorizontal,
 Circle ,
 CircleDot ,
 ArrowLeftRight ,
 CalendarDays ,
 ChevronDown 
} from 'lucide-react';
import { useFlightStore } from "../store/flightStore";

const FlightBooking = () => {
const navigate = useNavigate();
  const images = [
    '/img/flight.webp',
    '/img/flight1.webp',
    '/img/flight3.webp',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

const [activeTab, setActiveTab] = useState<
  "Flights" | "Check-In" | "Flight Status" | "Manage Booking"
>("Flights");
  const tabs = [
{ name: 'Flights', icon: Plane },
{ name: 'Check-In', icon: CircleCheck },
{ name: 'Flight Status', icon: CircleCheck },
{ name: 'Manage Booking', icon: SlidersHorizontal },
] as const;

const [oneWay , setOneWay] = useState<"One Way" | "Round Trip">("One Way")
const ways = [
  {icon:Circle, name:"One Way" },
  {icon: CircleDot, name:"Round Trip"}
];
const [from, setFrom] = useState("Delhi (DEL)");
const [to, setTo] = useState("Selected Destination");
const [activeField, setActiveField] = useState<"from" | "to" | null>(null);
const bookingFieldsRef = useRef<HTMLDivElement>(null);
const passengerRef = useRef<HTMLDivElement>(null);
const currencyRef = useRef<HTMLDivElement>(null);
const swapLocations = () =>{
  setFrom(to);
  setTo(from);
};

const cities = [
  {
    city: "Chennai",
    airport: "Chennai International Airport",
    code: "MAA",
  },
  {
    city: "Bengaluru",
    airport: "Kempegowda International Airport",
    code: "BLR",
  },
  {
    city: "Mumbai",
    airport: "Chhatrapati Shivaji Maharaj International Airport",
    code: "BOM",
  },
  {
    city: "Delhi",
    airport: "Indira Gandhi International Airport",
    code: "DEL",
  },
  {
    city: "Hyderabad",
    airport: "Rajiv Gandhi International Airport",
    code: "HYD",
  },
  {
    city: "Kochi",
    airport: "Cochin International Airport",
    code: "COK",
  },
];

const internationalCities = [
  {
    city: "Dubai",
    airport: "Dubai International Airport",
    code: "DXB",
  },
  {
    city: "London",
    airport: "Heathrow Airport",
    code: "LHR",
  },
  {
    city: "Singapore",
    airport: "Singapore Changi Airport",
    code: "SIN",
  },
  {
    city: "Colombo",
    airport: "Bandaranaike International Airport",
    code: "CMB",
  },
  {
    city: "Doha",
    airport: "Hamad International Airport",
    code: "DOH",
  },
  {
    city: "Kuala Lumpur",
    airport: "Kuala Lumpur International Airport",
    code: "KUL",
  },
];
const [selectedRegion, setSelectedRegion] = useState("India");

const [activeDateField, setActiveDateField] = useState<
  "departure" | "return" | null
>(null);
const [departureDate, setDepartureDate] = useState("");
const [returnDate, setReturnDate] = useState("");
const [passenger , setPassenger ] = useState("1 Adult");
const [ currency , setCurrency ] = useState("INR");
const [adultCount, setAdultCount] = useState(1);
const [ childrenCount, setChildrenCount] = useState(0);
const [infantCount, setInfantCount] = useState(0);
const [isPassengerOpen, setIsPassengerOpen] = useState(false);
const [isCurrencyOpen , setIsCurrencyOpen ] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;

    // Close Cities dropdown when clicking outside
   if (
  passengerRef.current &&
  !passengerRef.current.contains(target)
) {
  setIsPassengerOpen(false);
}

if (
  currencyRef.current &&
  !currencyRef.current.contains(target)
) {
  setIsCurrencyOpen(false);
}
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

const today = new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});
const searchFlights = useFlightStore(
  (state) => state.searchFlights
);

const handleSearch = async () => {
  const fromCode = from.match(/\(([A-Z]{3})\)$/)?.[1];
  const toCode = to.match(/\(([A-Z]{3})\)$/)?.[1];

  if (!fromCode || !toCode) {
    alert("Please select both cities.");
    return;
  }

  if (fromCode === toCode) {
    alert("Departure and destination must be different.");
    return;
  }

  if (!departureDate) {
    alert("Please select a departure date.");
    return;
  }

  await searchFlights({
    from: fromCode,
    to: toCode,
    date: departureDate,
  });

  navigate("/search-flight", {
    state: {
      oneWay,
      from,
      to,
      departureDate,
      returnDate,
      passenger,
      currency,
      adultCount,
      childrenCount,
      infantCount,
    },
  });
};

  return (
    <>
   
{/* Banner and booking form */}
<div className=" w-full   h-200">

  {/* Sliding banner: desktop only */}
  <div className="relative hidden w-full overflow-hidden lg:block ">
    <div
      className="flex transition-transform duration-700 ease-in-out"
      style={{
        transform: `translateX(-${currentIndex * 100}%)`,
      }}
    >
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Flight banner ${index + 1}`}
          className="h-[550px] w-full  shrink-0 object-cover xl:h-[650px]"
        />
      ))}
    </div>

    {/* Slider indicators */}
    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
      {images.map((image, index) => (
        <button
          key={image}
          type="button"
          onClick={() => setCurrentIndex(index)}
          aria-label={`Show image ${index + 1}`}
          className={`h-3 w-3 rounded-full ${
            currentIndex === index ? "bg-red-600" : "bg-white"
          }`}
        />
      ))}
    </div>
  </div>

  {/* Flight Booking form */}
 <div className="absolute  left-1/2  top-118 z-10 w-[40%]  -translate-x-1/2 -translate-y-1/2 rounded-xl  bg-white p-3 shadow-xl sm:w-[90%] md:left-1/4 md:w-[60%] md:-translate-x-1/2 lg:w-[45%]">
 {/* Clickable navigation tabs */}
<div className="grid grid-cols-4 gap-2">
      {tabs.map((tab) => {
      const Icon = tab.icon;
      const isActive = activeTab === tab.name;

      return (
        <button
          key={tab.name}
          onClick={() => setActiveTab(tab.name)}
      className={`flex min-w-0 cursor-pointer items-center justify-center gap-2 rounded-md border-b-2 px-2 py-3 transition-colors sm:px-3 ${
  isActive
    ? "bg-red-700 text-white"
    : "border-transparent text-gray-600 hover:text-red-700"
}`}
        >
          <Icon size={20} />
          <span className="text-sm font-medium">{tab.name}</span>
        </button>
      );
    })}
  </div>

  <div className="mt-4 border-t border-gray-300" />

  {/* flight */}
<div className="relative h-[700px] overflow-y-auto overflow-x-hidden pt-5">
    {activeTab === 'Flights' && (
      <div>
       <div className="flex flex-row justify-between items-center ">
         <h1 className="text-3xl font-bold mt-4">Welcome aboard</h1>
         <button 
         className="border border-red-200 bg-[#fff8f8] p-2.5 text-[#c30b12] font-bold rounded-md">Book Your Charter</button>
       </div>
        <p className="mt-6 text-xl text-gray-600 font-medium">
         Let's go places!
        </p>
<div className="flex gap-4   ">
{ways.map((way)=>{
const Icon = way.icon;
const isSelected = oneWay === way.name;
  return(
    <button
    key={way.name}
   type="button"
   onClick={()=> setOneWay(way.name as "One Way" | "Round Trip")}
   className={`flex items-center gap-2 rounded-full border px-4 py-2 mt-4 ${
          isSelected
            ? "border-[#edb16a] text-grey-500"
            : "border-gray-300 text-gray-500"
        }`}
    >
     {isSelected ? ( <CircleDot size={25} className="text-[#f0890c]"/>
     ):(  <Circle size={18} />

     )}
     
      <span>{way.name}</span>
    </button>
  )
})}

</div>
<>
<div ref={bookingFieldsRef} 
className="flex flex-col  mt-4  ">
  <div 
className="relative mt-2 flex w-full flex-col items-stretch gap-2 p-0 sm:flex-row sm:items-center sm:p-2">

  {/* From */}
  <button
    type="button"
    onClick={() => setActiveField(activeField === "from" ? null : "from")}
   className="h-20 w-full min-w-0 rounded-lg border border-gray-300 p-3 text-left hover:border-gray-500 sm:flex-1"
  >
    <div className="flex flex-col gap-1">
      <span className="text-sm text-gray-500">From</span>
      <span className="text-lg font-semibold text-gray-800">{from}</span>
    </div>
  </button>

  {/* Swap button */}
  <button
    type="button"
    onClick={swapLocations}
    className="px-2 text-[#edb16a]"
    aria-label="Swap locations"
  >
    <ArrowLeftRight size={20} />
  </button>

  {/* To */}
  <button
    type="button"
    onClick={() => setActiveField(activeField === "to" ? null : "to")}
  className="h-20 w-full min-w-0 rounded-lg border border-gray-300 p-3 text-left hover:border-gray-500 sm:flex-1"
  >
    <div className="flex flex-col gap-1">
      <span className="text-sm text-gray-500">To</span>
      <span className="text-lg font-semibold text-gray-800">{to}</span>
    </div>
  </button>

  {/* City dropdown */}
 {activeField && (
  <div className="absolute left-0 top-full z-[100] mt-2 w-full max-w-[800px] rounded-lg border border-gray-200 bg-white p-5 shadow-xl">
      <h3 className="mb-3 text-3xl font-semibold text-gray-700">
        {activeField === "from" ? "Select a region and city below" : "Select a region and city below"}
      </h3>
<div className="flex flex-row text-gray-500 font-bold text-xl p-2 ">
  <h4 className="w-42  ">Region</h4>
  <h4 className="w-50">Cities</h4>
</div>
      
<div className="flex flex-row">
  {/* Region buttons */}
  <div className="flex w-35 flex-col gap-4  text-xl">
    <button
      type="button"
      onClick={() => setSelectedRegion("India")}
      className={`rounded-full p-2  ${
        selectedRegion === "India"
          ? "font-bold text-black"
          : " text-gray-600"
      }`}
    >
      India
    </button>

    <button
      type="button"
      onClick={() => setSelectedRegion("International")}
      className={`rounded-full p-2 ${
        selectedRegion === "International"
           ? "font-bold text-black"
          : " text-gray-600"
      }`}
    >
      International
    </button>
  </div>

  {/* Show the selected region's cities */}
<div className="min-w-0 max-h-[350px] flex-1 overflow-y-auto">
    {(selectedRegion === "India"
      ? cities
      : internationalCities
    ).map((city) => (
      <button
        key={city.code}
        type="button"
        onClick={() => {
          const selectedCity = `${city.city} (${city.code})`;

          if (activeField === "from") {
            setFrom(selectedCity);
          } else {
            setTo(selectedCity);
          }

          setActiveField(null);
        }}
        className="flex w-full min-w-0 items-center justify-between gap-2 rounded-md p-2 text-left hover:bg-[#fef4e8] sm:p-3"
      >
        <div>
         <p className="text-base font-semibold text-gray-800 sm:text-lg">
  {city.city}
</p>

<p className="text-sm text-gray-500 sm:text-base">
  {city.airport}
</p>
        </div>

        <span className="rounded-md bg-[#faeddd] px-3 py-2 text-[#f79865]">
          {city.code}
        </span>
      </button>
    ))}
  </div>
</div>

    </div>
  )}

 
</div>
{/* depature date return date */}
<div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 mt-4">
  <label
      className={`relative flex h-20 cursor-pointer flex-col justify-center rounded-lg border p-3 ${
        activeDateField === "departure"
          ? "border-red-500"
          : "border-gray-300"
      }`}
    >
      <span className="text-sm text-gray-500">
        Departure Date
      </span>
 <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-semibold text-gray-800 sm:text-base">
          {departureDate
            ? new Date(`${departureDate}T12:00:00`).toLocaleDateString(
                "en-GB",
                {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                }
              )
            : "Select departure date"}
        </span>
 <CalendarDays
          size={29}
          className="shrink-0 text-[#f79865]"
        />
      </div>

      <input
        type="date"
        value={departureDate}
        onFocus={() => setActiveDateField("departure")}
        onChange={(e) => setDepartureDate(e.target.value)}
        onBlur={() => setActiveDateField(null)}
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        aria-label="Departure date"
      />  </label>
        
        {/* Return Date */}
 {/* Return Date */}
<label
  className={`relative flex h-20 flex-col justify-center rounded-lg border p-3 ${
    oneWay === "One Way"
      ? "cursor-not-allowed bg-gray-100 opacity-50"
      : activeDateField === "return"
        ? "cursor-pointer border-red-500"
        : "cursor-pointer border-gray-300"
  }`}
>
      <span className="text-sm text-gray-500">
        Return Date
      </span>
        <div className="flex items-center justify-between gap-2">
        <span className="text-base font-semibold text-gray-800">
          {returnDate
            ? new Date(`${returnDate}T12:00:00`).toLocaleDateString(
                "en-GB",
                {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                }
              )
            : "Select return date"}
        </span>
         <CalendarDays
          size={28}
          className="shrink-0 text-[#f79865]"
        />
      </div>

      <input
        type="date"
        value={returnDate}
        min={departureDate || undefined}
        disabled={oneWay === "One Way"}
      onFocus={() => {
    if (oneWay === "Round Trip") {
      setActiveDateField("return");
    }
  }}
        onChange={(e) => setReturnDate(e.target.value)}
        onBlur={() => setActiveDateField(null)}
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        aria-label="Return date"
      />  </label>
 
 </div>
 {/*passanger currency  */}
 
<div className="relative mt-6  grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">

  {/* Passenger */}
<div ref={passengerRef} className="relative w-full min-w-0 ">
    <button
      type="button"
      onClick={() => setIsPassengerOpen(!isPassengerOpen)}
      className="flex h-20 w-full flex-col justify-center gap-1 rounded-lg border border-gray-300 p-3 text-left"
    >
      <span className="text-sm text-gray-500 ">Passenger </span>

      <span className="flex w-full items-center justify-between">
        <span className="text-lg font-semibold text-gray-800">
          {passenger}
        </span>
        <ChevronDown size={22} className="text-gray-500" />
      </span>
    </button>

    {isPassengerOpen && (
      <div className="absolute left-0 top-full z-50 mt-2 w-full min-w-0 rounded-lg border border-gray-200 bg-white p-4 shadow-xl sm:min-w-[320px]">
        <h2 className="mb-4 font-bold">Passengers</h2>

        <div className="flex items-center justify-between gap-3 ">
          <div>
            <p className="font-semibold">Adult</p>
            <p className="text-sm text-gray-400">More than 12 years</p>
          </div>

   
         

          <div className="flex items-center gap-3">
            <button
              type="button"
              disabled={adultCount <= 1}
              onClick={() => {
                const nextCount = adultCount - 1;
                setAdultCount(nextCount);
                setPassenger(
                  `${nextCount} ${nextCount === 1 ? "Adult" : "Adults"}`
                );
              }}
              className="rounded-lg bg-gray-200 px-3 py-2 disabled:opacity-40"
            >
              -
            </button>

            <span>{adultCount}</span>

            <button
              type="button"
              disabled={adultCount >= 9}
              onClick={() => {
                const nextCount = adultCount + 1;
                setAdultCount(nextCount);
                setPassenger(
                  `${nextCount} ${nextCount === 1 ? "Adult" : "Adults"}`
                );
              }}
              className="rounded-lg bg-orange-500 px-3 py-2 text-white disabled:opacity-40"
            >
              +
            </button>
          </div>
        </div>
{/* children*/}
<div className="flex items-center justify-between gap-3  mt-2">
          <div>
            <p className="font-semibold">Children</p>
            <p className="text-sm text-gray-400">2 -  12 years</p>
          </div>

   
         

          <div className="flex items-center gap-3">
            <button
              type="button"
              disabled={childrenCount <= 0}
              onClick={() => {
                const newCount = childrenCount - 1;
                setChildrenCount(newCount);
              setPassenger(
        `${adultCount} Adult${adultCount > 1 ? "s" : ""}, ${newCount} Children`
      );
    }}
              className="rounded-lg bg-gray-200 px-3 py-2 disabled:opacity-40"
            >
              -
            </button>

            <span>{childrenCount}</span>

            <button
              type="button"
              disabled={childrenCount >= 9}
        onClick={() => {
  const newCount = childrenCount + 1;

  setChildrenCount(newCount);

  setPassenger(
    `${adultCount} Adult${adultCount > 1 ? "s" : ""}, ${newCount} Children`
  );
}}    className="rounded-lg bg-orange-500 px-3 py-2 text-white disabled:opacity-40"
            >
              +
            </button>
          </div>
        </div>
    {/*infant  */}
 <div className="flex items-center justify-between gap-3  mt-2">
          <div>
            <p className="font-semibold">Infant</p>
            <p className="text-sm text-gray-400">less than 2 years</p>
          </div>

   
         

          <div className="flex items-center gap-3">
            <button
              type="button"
              disabled={infantCount <= 0}
              onClick={() => {
                const nextCount = infantCount - 1;
                setInfantCount(nextCount);
               
              }}
              className="rounded-lg bg-gray-200 px-3 py-2 disabled:opacity-40"
            >
              -
            </button>

            <span>{infantCount}</span>

            <button
              type="button"
                disabled={infantCount >= 2}
              onClick={() => {
                const nextCount = infantCount + 1;
                setInfantCount(nextCount);
               
              }}
              className="rounded-lg bg-orange-500 px-3 py-2 text-white disabled:opacity-40"
            >
              +
            </button>
          </div>
        </div>   
        <button
          type="button"
          onClick={() => setIsPassengerOpen(false)}
          className="mt-5 w-full rounded-lg bg-orange-500 p-2 font-semibold text-white"
        >
          Done
        </button>
      </div>
    )}
  </div>

  {/* Currency */}
  <div ref={currencyRef} className="relative w-full min-w-0">
    <button
      type="button"
      onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
      className="flex h-20 w-full flex-col justify-center gap-1 rounded-lg border border-gray-300 p-3 text-left"
    >
      <span className="text-sm text-gray-500">Currency</span>

      <span className="flex w-full items-center justify-between">
        <span className="text-lg font-semibold text-gray-800">
          {currency}
        </span>
        <ChevronDown size={22} className="text-gray-500" />
      </span>
    </button>

    {isCurrencyOpen && (
      <div className="absolute left-0 top-full z-50 mt-2 w-40 rounded-lg border border-gray-200 bg-white p-2 shadow-xl">
        {["INR", "USD", "GBP", "EUR"].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              setCurrency(item);
              setIsCurrencyOpen(false);
            }}
            className={`w-full rounded-md p-2 text-left hover:bg-gray-100 ${
              currency === item ? "bg-orange-100 font-semibold" : ""
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    )}
  
</div>

</div>
 {/*search flight button */}

<div className="mt-6 mb-4 flex justify-center sm:justify-end">
  <button
    type="button"
    onClick={handleSearch}
    className="w-full rounded-md bg-[#fcb43c] px-5 py-3 text-lg font-bold text-white transition hover:bg-[#ed9805] sm:w-auto sm:px-8 sm:py-4 sm:text-xl" >
    Search Flight
  </button>
</div>

      </div>
    
    </>
{/*checkin */}
   </div>
)}
<div className="">
{activeTab === 'Check-In' && (
  <div className="flex flex-col gap-4 ">
    <h1 className="text-2xl font-bold sm:text-3xl">Web Check-In</h1>  
    <p className="text-base text-gray-500 sm:text-lg lg:text-xl">Web check-in is available for all flights departing from India </p>
 
<div className="flex flex-col justify-between gap-6 sm:flex-row mt-4">
  <div className="flex flex-1 flex-col gap-3 text-gray-400">
    <h1 className="text-gray-400">PNR Number / Ticket Number</h1>
    <label className="rounded-md border border-gray-300 px-4 py-3 focus-within:border-orange-500">
      <input
        type="text"
        placeholder="e.g. W3X3H8"
        className="w-full outline-none"
      />
    </label>
  </div>

  <div className="flex flex-1 flex-col gap-3">
    <h1 className=" text-gray-400">Email ID / Last Name</h1>
    <label className="rounded-md border border-gray-300 px-4 py-3 focus-within:border-orange-500">
      <input
        type="email"
        placeholder="john.deo@spicejet.com"
        className="w-full outline-none"
      />
    </label>
  </div>
</div>
<div className="">
  <button  className="shrink-0 whitespace-nowrap rounded-lg bg-[#faad46] px-6 py-4 text-2xl font-semibold text-white transition hover:bg-[#f0931a] w-full h-20">
Search Booking
  </button>
</div>
  </div>
)}
</div>
  {/* flight status */}
  <div className="">
    {activeTab === 'Flight Status' && (
      <div className="flex flex-col gap-4">
    <h1 className="text-2xl font-bold sm:text-3xl">
  Flight Status
</h1> 
         <p className="text-gray-500 text-2xl">Get up-to-date flight status.  </p>  
      
      {/* */}
        <div ref={currencyRef} className="relative w-full">
    <button
      type="button"
      onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
      className="flex h-20 w-full flex-col justify-center gap-1 rounded-lg border border-gray-300 p-3 text-left"
    >
      <span className="text-sm text-gray-500">Depature Date</span>

      <span className="flex w-full items-center justify-between">
        <span className="text-lg font-semibold text-gray-800">
      {today}
        </span>
        <ChevronDown size={22} className="text-gray-500" />
      </span>
    </button>

    {isCurrencyOpen && (
      <div className="absolute left-0 top-full z-50 mt-2 w-60 font-bold shadow-2xl text-2xl rounded-lg  border-gray-200 bg-white p-2 ">
        {["Yesterday", "Today", "Tomorrow", ].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              setCurrency(item);
              setIsCurrencyOpen(false);
            }}
            className={`w-full rounded-md p-2 text-left hover:bg-gray-100 ${
              currency === item ? "bg-orange-100 font-semibold" : ""
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    )}
     <div 
className="relative mt-2 flex w-full flex-row p-2 ">

  {/* From */}
  <button
    type="button"
    onClick={() => setActiveField(activeField === "from" ? null : "from")}
    className="h-20 flex-1 rounded-lg border border-gray-300 p-3 text-left hover:border-grey-500"
  >
    <div className="flex flex-col gap-1">
      <span className="text-sm text-gray-500">From</span>
      <span className="text-lg font-semibold text-gray-800">{from}</span>
    </div>
  </button>

  {/* Swap button */}
  <button
    type="button"
    onClick={swapLocations}
    className="px-2 text-[#edb16a]"
    aria-label="Swap locations"
  >
    <ArrowLeftRight size={20} />
  </button>

  {/* To */}
  <button
    type="button"
    onClick={() => setActiveField(activeField === "to" ? null : "to")}
    className="h-20 flex-1 rounded-lg border border-gray-300 p-3 text-left hover:border-grey-500"
  >
    <div className="flex flex-col gap-1">
      <span className="text-sm text-gray-500">To</span>
      <span className="text-lg font-semibold text-gray-800">{to}</span>
    </div>
  </button>

  {/* City dropdown */}
  {activeField && (
    <div className={`absolute top-full z-50 mt-2 w-[800px] max-w-[95vw] rounded-lg border border-gray-200 bg-white p-5 shadow-xl ${
      activeField === "from" ? "left-0" : "right-[-480px]"
    }`}>
      <h3 className="mb-3 text-lg font-semibold text-gray-700 sm:text-2xl">
        {activeField === "from" ? "Select a region and city below" : "Select a region and city below"}
      </h3>
<div className="flex flex-row gap-3 p-2 text-sm font-bold text-gray-500 sm:text-base">
  <h4 className="w-42  ">Region</h4>
  <h4 className="w-50">Cities</h4>
</div>
      
<div className="flex flex-col gap-3 sm:flex-row">
  {/* Region buttons */}
  <div className="flex w-full shrink-0 flex-row gap-2 overflow-x-auto text-sm sm:w-36 sm:flex-col sm:gap-4 sm:text-base">
    <button
      type="button"
      onClick={() => setSelectedRegion("India")}
      className={`rounded-full p-2  ${
        selectedRegion === "India"
          ? "font-bold text-black"
          : " text-gray-600"
      }`}
    >
      India
    </button>

    <button
      type="button"
      onClick={() => setSelectedRegion("International")}
      className={`rounded-full p-2 ${
        selectedRegion === "International"
           ? "font-bold text-black"
          : " text-gray-600"
      }`}
    >
      International
    </button>
  </div>

  {/* Show the selected region's cities */}
  <div className="flex-1">
    {(selectedRegion === "India"
      ? cities
      : internationalCities
    ).map((city) => (
      <button
        key={city.code}
        type="button"
        onClick={() => {
          const selectedCity = `${city.city} (${city.code})`;

          if (activeField === "from") {
            setFrom(selectedCity);
          } else {
            setTo(selectedCity);
          }

          setActiveField(null);
        }}
        className="flex w-full items-center justify-between rounded-md p-3 text-left hover:bg-[#fef4e8]"
      >
        <div>
          <p className="text-xl font-semibold text-gray-800">
            {city.city}
          </p>
          <p className="text-lg text-gray-500">
            {city.airport}
          </p>
        </div>

        <span className="rounded-md bg-[#faeddd] px-3 py-2 text-[#f79865]">
          {city.code}
        </span>
      </button>
    ))}
  </div>
</div>

    </div>
  )}

 
</div>
  
</div>
<p className="text-red-600 text-base">Please Select Flight No.</p>
      <div className="border border-gray-300 w-full h-20 rounded-md p-3 flex flex-col">
        <span className="text-gray-400 ">Flight No.( Optional )</span>
      <label> SG -  <input type="text"  ></input></label>
      </div>
      <div className="w-full ">
         <button
      type="button"
     
      className=" w-full h-15  border-gray-300 bg-[#eeeeee]"
    >
      Search Flight
    </button>
      </div>
      </div>
    )}
  </div>
  {/* manage booking */}
  <div className="">

    {activeTab === 'Manage Booking' && (
      <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold sm:text-3xl">
  View / Manage Booking
</h1>
         <p className="text-gray-500 text-2xl">View, Modify or Cancel your bookings   </p>  
<div className="flex flex-col gap-4  mt-4">
     
<div className="flex flex-col justify-between gap-6 sm:flex-row mt-4">
  <div className="flex flex-1 flex-col gap-3 text-gray-400">
    <h1 className="text-gray-400">PNR Number / Ticket Number</h1>
    <label className="rounded-md border border-gray-300 px-4 py-3 focus-within:border-orange-500">
      <input
        type="text"
        placeholder="e.g. W3X3H8"
        className="w-full outline-none"
      />
    </label>
  </div>

  <div className="flex flex-1 flex-col gap-3">
    <h1 className=" text-gray-400">Email ID / Last Name</h1>
    <label className="rounded-md border border-gray-300 px-4 py-3 focus-within:border-orange-500">
      <input
        type="email"
        placeholder="john.deo@spicejet.com"
        className="w-full outline-none"
      />
    </label>
  </div>
</div>
<div className="">
  <button  className="shrink-0 whitespace-nowrap rounded-lg bg-[#faad46] px-6 py-4 text-2xl font-semibold text-white transition hover:bg-[#f0931a] w-full h-20">
Search Booking
  </button>
</div>
<div className="">
  <button  className="shrink-0 whitespace-nowrap rounded-lg bg-[#e4e1e1] px-5 py-3 text-xl font-bold text-black transition hover:bg-[#d1cece] w-full h-18">
Login to View Upcoming Trips
  </button>
</div>
  </div>
<div className="flex w-full items-center justify-center p-3 text-center text-sm font-semibold text-gray-500 sm:text-base">  <p>
    To claim refund for a cancelled/rescheduled flight or to select an alternate flight
  </p>
</div>
<div className="mt-4 mb-4">
  <button  className="shrink-0 whitespace-nowrap rounded-lg bg-[#faad46] px-6 py-4 text-2xl font-semibold text-white transition hover:bg-[#f0931a] w-full h-20">
View Change Assist
  </button>
</div>
     </div>
    )}
  </div>
  </div>
</div>
</div>

<div className="relative z-0 mt-10 flex flex-col">
  <Iamhere />
  <Spintowin />
  <Irresistibledeals/>
  <Recommended/>
  <SpiceClubLoyalty/>
  <Cargo/>
</div> 

{/* Flight Booking form */}

  
    </>
  );
};

export default FlightBooking;