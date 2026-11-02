import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFlightStore } from "./store/flightStore";
import { MoveRight } from 'lucide-react';
import type { Flight } from "./api/flightApi";
import NoJourneyDetails from "./components/NoJourneyDetails";
interface SearchDetails {
  oneWay: "One Way" | "Round Trip";
  from: string;
  to: string;
  departureDate: string;
  returnDate: string;
  passenger: string;
}

const formatDate = (date: string) => {
  if (!date) return "Not selected";

  return new Date(`${date}T12:00:00`).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const SearchFlight = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const flights = useFlightStore((state) => state.flights);
const loading = useFlightStore((state) => state.loading);
const error = useFlightStore((state) => state.error);
const searchFlights = useFlightStore(
  (state) => state.searchFlights
);

  const details = location.state as SearchDetails | null;
const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);

  // Call the Zustand action when journey details change
useEffect(() => {
  if (!details) return;

  void searchFlights({
    from: details.from,
    to: details.to,
    date: details.departureDate,
  });
}, [
  details?.from,
  details?.to,
  details?.departureDate,
  searchFlights,
]);

 if (!details) {
  return <NoJourneyDetails />;
}


   
return (
    <>
  <div className="w-full bg-[#f6f6f6] px-3 py-5 sm:px-6 sm:py-8">
    <div className="mx-auto flex w-full max-w-[1600px] items-center gap-4 overflow-x-auto rounded-xl bg-white p-4 shadow-xl md:p-6">

      {/* Trip type and route */}
      <div className="flex shrink-0 items-center gap-2">
        <p className="whitespace-nowrap text-xl font-bold text-black">
          {details.oneWay}:
        </p>

        <p className="whitespace-nowrap text-lg font-bold text-gray-600 sm:text-base">
          {details.from} to {details.to}
        </p>
      </div>

      {/* Departure date */}
      <div className="flex shrink-0 items-center gap-2">
        <p className="whitespace-nowrap text-xl font-bold text-black">
          Depart Date:
        </p>

        <p className="whitespace-nowrap text-lg font-bold text-gray-600">
          {formatDate(details.departureDate)}
        </p>
      </div>

      {/* Return date */}
      {details.oneWay === "Round Trip" && (
        <div className="flex shrink-0 items-center gap-2">
          <p className="whitespace-nowrap text-xl font-bold text-black">
            Return Date:
          </p>

          <p className="whitespace-nowrap text-lg font-bold text-gray-600">
            {formatDate(details.returnDate)}
          </p>
        </div>
      )}

      {/* Passengers */}
      <div className="flex shrink-0 items-center gap-2">
        <p className="whitespace-nowrap text-xl font-bold text-black">
          Passengers:
        </p>

        <p className="whitespace-nowrap text-lg font-bold text-gray-600">
          {details.passenger}
        </p>
      </div>

      {/* Modify Search */}
      <div className="ml-auto flex">
        <button
        type="button"
        onClick={() => navigate("/")}
        className="shrink-0 whitespace-nowrap rounded-md bg-[#faad46] px-5 py-4 text-xl font-semibold text-white transition hover:bg-[#f0931a]"
      >
        Modify Search
      </button>
      </div>

    </div>
  
  </div>
   <div className="mx-auto flex w-full max-w-[1600px] items-center mt-4 ">
        <h6 className="text-3xl font-bold ">Select your Departure to  {details.to}  
         <span className="text-lg font-light ml-3">     {formatDate(details.departureDate)}</span></h6>
    </div>
    <div className="mx-auto mt-6 w-full max-w-[1600px] px-3 pb-10 sm:px-6">
  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
    <h2 className="text-2xl font-bold text-gray-800">
      Available Flights
    </h2>

    <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-800">
      Demo fares
    </span>
  </div>

  {loading && (
    <div className="rounded-xl bg-white p-6 shadow">
      <p className="text-gray-600">Searching for flights...</p>
    </div>
  )}

  {!loading && error && (
    <div className="rounded-xl bg-red-50 p-5 text-red-700">
      {error}
    </div>
  )}

  {!loading &&
    !error &&
    flights.filter(
      (flight) => flight.date === details.departureDate
    ).length === 0 && (
      <div className="rounded-xl bg-white p-6 shadow">
        <p className="font-semibold text-gray-800">
          No sample flights found
        </p>
        <p className="mt-2 text-gray-500">
          Try another route or departure date.
        </p>
      </div>
    )}

  <div className="space-y-4">
  {flights
    .filter((flight) => flight.date === details.departureDate)
    .map((flight) => (
      <div
        key={`${flight.id}-${flight.date}`}
        onClick={() => {
          navigate("/contact", {
            state: {
              flight,
              details,
            },
          });
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            navigate("/contact", {
              state: {
                flight,
                details,
              },
            });
          }
        }}
        className="cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-orange-400 hover:shadow-lg"
      >
        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-[1fr_2fr_1fr]">
          {/* Airline */}
          <div>
            <p className="text-lg font-bold text-gray-800">
              {flight.airline}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Flight {flight.flightNumber}
            </p>
            <p className="mt-2 text-xs text-gray-500">
              {flight.stops}
            </p>
          </div>

          {/* Departure and arrival */}
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {flight.departure}
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-600">
                {flight.from}
              </p>
              <p className="mt-1 max-w-40 text-xs text-gray-400">
                {flight.fromAirport}
              </p>
            </div>

            <div className="flex min-w-20 flex-1 flex-col items-center">
              <span className="text-xs text-gray-500">
                {flight.duration}
              </span>
              <div className="relative my-2 h-px w-full bg-gray-300">
                <span className="absolute -right-1 -top-2 text-gray-400">
                  ✈
                </span>
              </div>
              <span className="text-xs text-gray-500">
                {flight.stops}
              </span>
            </div>

            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">
                {flight.arrival}
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-600">
                {flight.to}
              </p>
              <p className="mt-1 max-w-40 text-xs text-gray-400">
                {flight.toAirport}
              </p>
            </div>
          </div>

          {/* Price and select button */}
          <div className="border-t border-gray-200 pt-4 md:border-l md:border-t-0 md:pl-5 md:pt-0 md:text-right">
            <p className="text-sm text-gray-500">Sample fare</p>
            <p className="mt-1 text-2xl font-bold text-red-700">
              {flight.currency} {flight.price.toLocaleString("en-IN")}
            </p>

            <button
              type="button"
               onClick={(e) => {
    e.stopPropagation();
    setSelectedFlight(flight);
  }}
              className="mt-3 rounded-md bg-orange-500 px-5 py-2 font-semibold text-white transition hover:bg-orange-600"
            >
              Select Flight
            </button>

            <p className="mt-2 text-xs text-gray-400">
              Demo price · Per passenger
            </p>
          </div>
        </div>
      </div>
    ))}
</div>
</div>
{/*footer  */}
{selectedFlight && (
  <div className="mx-auto shadow-[0_-6px_12px_-4px_rgba(0,0,0,0.15),-6px_0_12px_-4px_rgba(0,0,0,0.15),6px_0_12px_-4px_rgba(0,0,0,0.15)] mt-4 flex w-full max-w-[1600px]  flex-col items-start gap-4  bg-white p-5 sm:flex-row sm:items-center">
    <div className="flex flex-col gap-2">
      <span className="flex items-center gap-2 font-semibold">
        {selectedFlight.from}
        <MoveRight size={18} />
        {selectedFlight.to}
      </span>

      <h2 className="font-semibold text-gray-800">
        {details.from} to {details.to}
      </h2>

      <p className="text-gray-600">
        {formatDate(details.departureDate)}
      </p>

      <p className="text-gray-600">
        {details.passenger}
      </p>

      <p className="text-sm text-gray-500">
        {selectedFlight.airline} · {selectedFlight.flightNumber}
      </p>
    </div>

    <div className="ml-auto flex flex-wrap items-center gap-4">
      <p className="text-2xl font-bold text-red-700">
        {selectedFlight.currency}{" "}
        {selectedFlight.price.toLocaleString("en-IN")}
      </p>

      <button
        type="button"
        onClick={() =>
          navigate("/contact", {
            state: {
              flight: selectedFlight,
              details,
            },
          })
        }
        className="shrink-0 whitespace-nowrap rounded-lg bg-[#faad46] px-6 py-4 text-2xl font-semibold text-white transition hover:bg-[#f0931a] w-60 h-25"
      >
        Continue
      </button>
    </div>
  </div>
)}

  </>
  
);
  
};

export default SearchFlight;
