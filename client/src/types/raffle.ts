/**
 * Interface representing the Raffle model in the Frontend
 * It should match the structure returned by the Backend Service
 */

export interface Raffle {
  id: string;
  title: string;
  description?: string;
  slug?: string;
  pricePerTicket: number;
  startDate: string; // ISO string from Backend
  endDate: string; // ISO string from Backend
  maxTickets: number;
  progressPercentage: number; // Calculated field from Backend Service
  status: "DRAFT" | "ACTIVE" | "FINISHED" | "CANCELLED";

  // Optional relations
  owner?: {
    id: string;
    fullName: string;
    email: string;
  };

  _count?: {
    tickets: number;
  };
}
