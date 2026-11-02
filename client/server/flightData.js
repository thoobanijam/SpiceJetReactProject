
export const cities = [
  { city: "Chennai", airport: "Chennai International Airport", code: "MAA" },
  { city: "Bengaluru", airport: "Kempegowda International Airport", code: "BLR" },
  { city: "Mumbai", airport: "Chhatrapati Shivaji Maharaj International Airport", code: "BOM" },
  { city: "Delhi", airport: "Indira Gandhi International Airport", code: "DEL" },
  { city: "Hyderabad", airport: "Rajiv Gandhi International Airport", code: "HYD" },
  { city: "Kochi", airport: "Cochin International Airport", code: "COK" },
];

export const internationalCities = [
  { city: "Dubai", airport: "Dubai International Airport", code: "DXB" },
  { city: "London", airport: "Heathrow Airport", code: "LHR" },
  { city: "Singapore", airport: "Singapore Changi Airport", code: "SIN" },
  { city: "Colombo", airport: "Bandaranaike International Airport", code: "CMB" },
  { city: "Doha", airport: "Hamad International Airport", code: "DOH" },
  { city: "Kuala Lumpur", airport: "Kuala Lumpur International Airport", code: "KUL" },
];

// Sample itinerary templates. These are not real flight schedules.
const itineraryTemplates = [
  {
    airline: "IndiGo",
    flightNumber: "6E 204",
    departure: "06:30",
    arrival: "08:45",
    duration: "2h 15m",
    stops: "Non-stop",
    price: 4500,
  },
  {
    airline: "Air India",
    flightNumber: "AI 602",
    departure: "10:15",
    arrival: "12:40",
    duration: "2h 25m",
    stops: "Non-stop",
    price: 5200,
  },
  {
    airline: "SpiceJet",
    flightNumber: "SG 815",
    departure: "16:20",
    arrival: "19:10",
    duration: "2h 50m",
    stops: "1 stop",
    price: 3900,
  },
];

// Generate demo itineraries for every distinct city pair.
const allCities = [...cities, ...internationalCities];

export const flightItineraries = [];

for (const from of allCities) {
  for (const to of allCities) {
    if (from.code === to.code) continue;

    itineraryTemplates.forEach((template, index) => {
      const isInternational =
        cities.every((city) => city.code !== from.code) ||
        cities.every((city) => city.code !== to.code);

      flightItineraries.push({
        id: `${from.code}-${to.code}-${index + 1}`,
        from: from.code,
        to: to.code,
        fromCity: from.city,
        toCity: to.city,
        fromAirport: from.airport,
        toAirport: to.airport,
        ...template,
        // Demonstration pricing only.
        price: isInternational
          ? template.price * 8
          : template.price,
        currency: "INR",
        isDemo: true,
      });
    });
  }
}
