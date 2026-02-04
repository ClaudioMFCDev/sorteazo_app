import { RaffleCard } from "../components/RaffleCard";
import { MOCK_RAFFLES } from "../constants/mockData";

export const Home = () => {
    return (
        <div className="p-4 bg-gray-50 min-h-screen">
            <header className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 italic">Explorar Sorteos</h1>
                <p className="text-gray-500 text-sm">Aquí aparecerá la lista de rifas activas.</p>
            </header>

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