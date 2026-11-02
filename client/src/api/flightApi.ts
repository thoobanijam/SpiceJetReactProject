
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export interface FlightSearchParams {
  from: string;
  to: string;
  date: string;
}

export interface Flight {
  id: string;
  from: string;
  to: string;
  fromCity: string;
  toCity: string;
  fromAirport: string;
  toAirport: string;
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  duration: string;
  stops: string;
  price: number;
  currency: string;
  date: string;
  isDemo: boolean;
}

export async function getFlights(
  params: FlightSearchParams
): Promise<Flight[]> {
  const response = await api.get("/api/flights", {
    params,
  });

  return response.data.flights;
}
