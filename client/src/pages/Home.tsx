import { RaffleCard } from "../components/RaffleCard";
import { MOCK_RAFFLES } from "../constants/mockData";

export const Home = () => {
    return (
        <div className="p-4">
            <head>
                <h1 className="text-2xl font-bold">Explorar Sorteos</h1>
                <p className="text-gray-600">Aquí aparecerá la lista de rifas activas.</p>
            </head>

            <div className="flex flex-col gap-2">
                {MOCK_RAFFLES.map((raffle) => (
                    <RaffleCard
                        key={raffle.id}
                        title={raffle.title}
                        pricePerTicket={raffle.pricePerTicket}
                        maxTickets={raffle.maxTickets}
                        totalTickets={raffle.totalTickets}
                        progress={raffle.progressPercentage}
                        endDate={raffle.endDate}
                    />
                ))}
            </div>
        </div>
    );
};