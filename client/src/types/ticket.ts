export interface TicketGridProps {
    maxTickets: number;
    selectNumber: number | null;
    onSelect: (num: number) => void;
    soldTickets: number[];
}