import { apiFetch } from "./apiClient";
import type { Raffle } from '../types/raffle.ts'

export const raffleService = {
    // Method to get all raffles
    getAll: () => apiFetch<Raffle[]>('/raffles'),

    // Method to get one by ID
    getOne: (id: string) => apiFetch<Raffle>(`/raffles/${id}`),
};

