import { useState, useEffect } from "react";
import type { Raffle } from "../types/raffle.ts";
import { raffleService } from "../services/raffleService.ts";

export function useRaffle(id: string) {
  const [raffle, setRaffle] = useState<Raffle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Avoid re-fetching if ID is not present
    if (!id) return;

    const loadRaffle = async () => {
      try {
        setLoading(true);
        const data = await raffleService.getOne(id);
        // Explicitly set the data
        setRaffle(data);
      } catch (err: any) {
        setError(err.message || "Error recuperando el sorteo");
      } finally {
        setLoading(false);
      }
    };

    loadRaffle();
  }, [id]);
  return { raffle, loading, error };
}
