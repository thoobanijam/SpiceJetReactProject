
import { create } from "zustand";
import {
  getFlights,
  type Flight,
  type FlightSearchParams,
} from "../api/flightApi";

interface FlightStore {
  flights: Flight[];
  loading: boolean;
  error: string | null;
  searchFlights: (params: FlightSearchParams) => Promise<void>;
}

export const useFlightStore = create<FlightStore>((set) => ({
  flights: [],
  loading: false,
  error: null,

  searchFlights: async (params) => {
    set({ flights: [], loading: true, error: null });

    try {
      const flights = await getFlights(params);

      set({
        flights,
        loading: false,
      });
    } catch (error) {
      console.error("Flight API error:", error);

      set({
        flights: [],
        loading: false,
        error: "Could not load flights. Please try again.",
      });
    }
  },
}));
