import type { Raffle } from "../types/raffle";

// Initial data to test the UI without backend connection
// Description: Constant containing an array of raffle objects
export const MOCK_RAFFLES: Raffle[] = [
  {
    id: "1",
    title: "iPhone 15 Pro Max - Sorteo de Verano",
    description: "Participá por el último iPhone. Sorteo ante escribano público.",
    pricePerTicket: 1500,
    maxTickets: 100,
    progressPercentage: 45,
    startDate: "2026-01-01T00:00:00Z",
    endDate: "2026-03-01T00:00:00Z",
    status: "ACTIVE", 
  },
  {
    id: "2",
    title: "PlayStation 5 + 2 Controles",
    description: "Llevate la consola de última generación con dos DualSense.",
    pricePerTicket: 2000,
    maxTickets: 50,
    progressPercentage: 100,
    startDate: "2026-01-15T00:00:00Z", 
    endDate: "2026-02-15T00:00:00Z",
    status: "FINISHED", 
  },
  {
    id: "3",
    title: "Set de Herramientas Profesional",
    description: "Combo completo de herramientas para tu taller.",
    pricePerTicket: 800,
    maxTickets: 200,
    progressPercentage: 10,
    startDate: "2025-11-01T00:00:00Z", 
    endDate: "2025-12-01T00:00:00Z",
    status: "FINISHED", 
  },
];