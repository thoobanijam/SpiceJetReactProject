
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { Flight } from "./api/flightApi";

interface SearchDetails {
  oneWay: "One Way" | "Round Trip";
  from: string;
  to: string;
  departureDate: string;
  returnDate: string;
  passenger: string;
}

interface BookingState {
  flight: Flight;
  details: SearchDetails;
}

interface PassengerForm {
  givenName: string;
  lastName: string;
  gender: string;
  dob: string;
  nationality: string;
  contactName: string;
  email: string;
  phone: string;
  termsAccepted: boolean;
}

const initialForm: PassengerForm = {
  givenName: "",
  lastName: "",
  gender: "",
  dob: "",
  nationality: "",
  contactName: "",
  email: "",
  phone: "",
  termsAccepted: false,
};

const inputClass =
  "mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-sm text-gray-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100";

const labelClass = "block text-sm font-medium text-gray-700";

const formatDate = (date: string) => {
  if (!date) return "Date not available";

  const parsedDate = new Date(`${date.slice(0, 10)}T12:00:00`);

  if (Number.isNaN(parsedDate.getTime())) return date;

  return parsedDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const Contact = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const bookingState = location.state as BookingState | null;
  const flight = bookingState?.flight;
  const details = bookingState?.details;

  const [form, setForm] = useState<PassengerForm>(initialForm);
  const [showReview, setShowReview] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const updateField = (
    field: keyof PassengerForm,
    value: string | boolean
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  if (!flight || !details) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-20 text-center">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <h1 className="text-2xl font-bold text-gray-900">
            Flight details not found
          </h1>
          <p className="mt-3 text-gray-600">
            Please select a flight from the search results before continuing.
          </p>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-6 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
          >
            Search Flights
          </button>
        </div>
      </main>
    );
  }

  const price = Number(flight.price) || 0;
  const currency = flight.currency || "INR";

  const money = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(amount);

  const submitPassengerDetails = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setShowReview(true);
  };

  const bookFlight = () => {
    // Demo confirmation only. This does not create a real airline ticket.
    setConfirmed(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            SpiceJet · Flight booking
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Passenger details
          </h1>
          <p className="mt-2 text-gray-600">
            Enter your details carefully and review your itinerary before
            confirming.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            {/* Flight itinerary */}
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-gray-900">
                  Your flight
                </h2>
                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                  {details.oneWay}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {flight.departure}
                  </p>
                  <p className="mt-1 font-semibold text-gray-800">
                    {flight.fromCity || details.from}
                  </p>
                  <p className="text-sm text-gray-500">
                    {flight.from || details.from}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {flight.fromAirport}
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xs text-gray-500">{flight.duration}</p>
                  <div className="my-2 flex items-center gap-1">
                    <div className="h-px w-8 bg-gray-300 sm:w-12" />
                    <span className="text-orange-500">✈</span>
                    <div className="h-px w-8 bg-gray-300 sm:w-12" />
                  </div>
                  <p className="text-xs text-gray-500">{flight.stops}</p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">
                    {flight.arrival}
                  </p>
                  <p className="mt-1 font-semibold text-gray-800">
                    {flight.toCity || details.to}
                  </p>
                  <p className="text-sm text-gray-500">
                    {flight.to || details.to}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {flight.toAirport}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 border-t border-gray-100 pt-4 text-sm sm:grid-cols-3">
                <div>
                  <p className="text-gray-500">Departure date</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {formatDate(flight.date || details.departureDate)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Airline</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {flight.airline}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Flight number</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {flight.flightNumber}
                  </p>
                </div>
              </div>
            </section>

            {/* Passenger and contact form */}
            <form onSubmit={submitPassengerDetails} className="space-y-6">
              <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Passenger information
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Enter the passenger's details as shown on their travel
                  document.
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <label className={labelClass}>
                    Given name *
                    <input
                      className={inputClass}
                      type="text"
                      autoComplete="given-name"
                      placeholder="Enter given name"
                      value={form.givenName}
                      onChange={(e) =>
                        updateField("givenName", e.target.value)
                      }
                      required
                    />
                  </label>

                  <label className={labelClass}>
                    Last name *
                    <input
                      className={inputClass}
                      type="text"
                      autoComplete="family-name"
                      placeholder="Enter last name"
                      value={form.lastName}
                      onChange={(e) =>
                        updateField("lastName", e.target.value)
                      }
                      required
                    />
                  </label>

                  <label className={labelClass}>
                    Gender *
                    <select
                      className={inputClass}
                      value={form.gender}
                      onChange={(e) =>
                        updateField("gender", e.target.value)
                      }
                      required
                    >
                      <option value="">Select gender</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">
                        Prefer not to say
                      </option>
                    </select>
                  </label>

                  <label className={labelClass}>
                    Date of birth *
                    <input
                      className={inputClass}
                      type="date"
                      max={new Date().toISOString().slice(0, 10)}
                      value={form.dob}
                      onChange={(e) => updateField("dob", e.target.value)}
                      required
                    />
                  </label>

                  <label className={`${labelClass} sm:col-span-2`}>
                    Nationality *
                    <input
                      className={inputClass}
                      type="text"
                      autoComplete="country-name"
                      placeholder="Enter nationality"
                      value={form.nationality}
                      onChange={(e) =>
                        updateField("nationality", e.target.value)
                      }
                      required
                    />
                  </label>
                </div>
              </section>

              <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Contact details
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Booking updates will be associated with these contact
                  details.
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <label className={labelClass}>
                    Contact name *
                    <input
                      className={inputClass}
                      type="text"
                      autoComplete="name"
                      placeholder="Enter contact name"
                      value={form.contactName}
                      onChange={(e) =>
                        updateField("contactName", e.target.value)
                      }
                      required
                    />
                  </label>

                  <label className={labelClass}>
                    Email address *
                    <input
                      className={inputClass}
                      type="email"
                      autoComplete="email"
                      placeholder="name@example.com"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      required
                    />
                  </label>

                  <label className={`${labelClass} sm:col-span-2`}>
                    Phone number *
                    <input
                      className={inputClass}
                      type="tel"
                      autoComplete="tel"
                      placeholder="Include country code, e.g. +91"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      required
                    />
                  </label>
                </div>
              </section>

              {/* Baggage information */}
              <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Baggage allowance
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Illustrative allowances for this demo. Actual limits depend
                  on the airline, route and fare.
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                    <span className="text-2xl">👜</span>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        Personal item
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        Small handbag or laptop bag that fits under the seat.
                      </p>
                    </div>
                    <span className="text-right text-sm font-semibold text-gray-800">
                      Check fare rules
                    </span>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                    <span className="text-2xl">🎒</span>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        Carry-on baggage
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        Cabin bag allowance and dimensions vary by airline and
                        route.
                      </p>
                    </div>
                    <span className="text-right text-sm font-semibold text-gray-800">
                      Check fare rules
                    </span>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                    <span className="text-2xl">🧳</span>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        Checked baggage
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        The included weight and any extra baggage fees depend
                        on the fare.
                      </p>
                    </div>
                    <span className="text-right text-sm font-semibold text-gray-800">
                      Check fare rules
                    </span>
                  </div>
                </div>
              </section>

              {/* Terms acknowledgement */}
              <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                <label className="flex items-start gap-3 text-sm leading-6 text-gray-600">
                  <input
                    className="mt-1 h-4 w-4 accent-orange-500"
                    type="checkbox"
                    checked={form.termsAccepted}
                    onChange={(e) =>
                      updateField("termsAccepted", e.target.checked)
                    }
                    required
                  />
                  <span>
                    By proceeding, I acknowledge that I have read and agree to
                    Trip.com's{" "}
                    <a
                      className="font-medium text-orange-600 underline"
                      href="https://pages.trip.com/service-guideline/terms-en-xx.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a
                      className="font-medium text-orange-600 underline"
                      href="https://pages.trip.com/service-guideline/privacy-policy-en-xx.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Privacy Statement
                    </a>{" "}
                    for flight bookings.
                  </span>
                </label>
              </section>

              <div className="flex flex-col-reverse justify-between gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100"
                >
                  Back to flights
                </button>

                <button
                  type="submit"
                  className="rounded-md bg-orange-500 px-8 py-3 font-bold text-white shadow-sm transition hover:bg-orange-600"
                >
                  NEXT
                </button>
              </div>
            </form>
          </div>

          {/* Price summary */}
          <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
            <h2 className="text-lg font-bold text-gray-900">
              Price summary
            </h2>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-3">
                <span className="text-gray-500">Flight fare</span>
                <span className="font-semibold text-gray-900">
                  {money(price)}
                </span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-gray-500">Taxes and fees</span>
                <span className="text-gray-700">Included in demo fare</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="text-xl font-bold text-orange-600">
                    {money(price)}
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 rounded-lg bg-orange-50 p-3 text-xs leading-5 text-orange-800">
              Sample fare for demonstration only. This page does not check
              live availability or issue an airline ticket.
            </p>
          </aside>
        </div>
      </div>

      {/* Booking review modal */}
      {showReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget && !confirmed) {
              setShowReview(false);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-title"
            className="my-auto max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
          >
            {confirmed ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
                  ✓
                </div>
                <h2
                  id="review-title"
                  className="mt-5 text-2xl font-bold text-gray-900"
                >
                  Demo booking confirmed!
                </h2>
                <p className="mt-3 text-gray-600">
                  Your sample booking flow is complete. No real ticket has
                  been issued and no airline reservation has been made.
                </p>
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="mt-6 rounded-xl bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600"
                >
                  Return to home
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                      Final step
                    </p>
                    <h2
                      id="review-title"
                      className="mt-1 text-2xl font-bold text-gray-900"
                    >
                      Review your booking
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Check all details before confirming.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowReview(false)}
                    aria-label="Close review"
                    className="rounded-full px-3 py-1 text-2xl text-gray-500 hover:bg-gray-100"
                  >
                    ×
                  </button>
                </div>

                <div className="mt-6 space-y-5">
                  <div className="rounded-xl border border-gray-200 p-4">
                    <h3 className="font-bold text-gray-900">
                      Flight itinerary
                    </h3>
                    <div className="mt-3 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">From</p>
                        <p className="font-semibold">
                          {flight.fromCity || details.from} (
                          {flight.from || details.from})
                        </p>
                        <p className="text-sm text-gray-600">
                          {flight.departure}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">To</p>
                        <p className="font-semibold">
                          {flight.toCity || details.to} (
                          {flight.to || details.to})
                        </p>
                        <p className="text-sm text-gray-600">
                          {flight.arrival}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                      <p>
                        <span className="text-gray-500">Date: </span>
                        {formatDate(flight.date || details.departureDate)}
                      </p>
                      <p>
                        <span className="text-gray-500">Airline: </span>
                        {flight.airline} · {flight.flightNumber}
                      </p>
                      <p>
                        <span className="text-gray-500">Duration: </span>
                        {flight.duration}
                      </p>
                      <p>
                        <span className="text-gray-500">Stops: </span>
                        {flight.stops}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-gray-200 p-4">
                    <h3 className="font-bold text-gray-900">
                      Passenger details
                    </h3>
                    <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
                      <p>
                        <span className="text-gray-500">Full name: </span>
                        {form.givenName} {form.lastName}
                      </p>
                      <p>
                        <span className="text-gray-500">Gender: </span>
                        {form.gender}
                      </p>
                      <p>
                        <span className="text-gray-500">Date of birth: </span>
                        {formatDate(form.dob)}
                      </p>
                      <p>
                        <span className="text-gray-500">Nationality: </span>
                        {form.nationality}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-gray-200 p-4">
                    <h3 className="font-bold text-gray-900">
                      Contact details
                    </h3>
                    <div className="mt-3 space-y-2 text-sm">
                      <p>
                        <span className="text-gray-500">Contact name: </span>
                        {form.contactName}
                      </p>
                      <p>
                        <span className="text-gray-500">Email: </span>
                        {form.email}
                      </p>
                      <p>
                        <span className="text-gray-500">Phone: </span>
                        {form.phone}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-gray-200 p-4">
                    <h3 className="font-bold text-gray-900">
                      Baggage allowance
                    </h3>
                    <div className="mt-3 space-y-2 text-sm text-gray-600">
                      <p>Personal item: check airline fare rules</p>
                      <p>Carry-on baggage: check airline fare rules</p>
                      <p>Checked baggage: check airline fare rules</p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-orange-50 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-bold text-gray-900">
                        Total demo fare
                      </span>
                      <span className="text-xl font-bold text-orange-600">
                        {money(price)}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-orange-800">
                      This is a demo confirmation. A real booking requires a
                      connected booking provider and backend persistence.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setShowReview(false)}
                    className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    Edit details
                  </button>
                  <button
                    type="button"
                    onClick={bookFlight}
                    className="rounded-xl bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600"
                  >
                    Book a Flight
                  </button>
                </div>
              </>
            )}
          </section>
        </div>
      )}
    </main>
  );
};

export default Contact;
