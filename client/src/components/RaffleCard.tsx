import { Calendar, Ticket } from "lucide-react";

//Props definition to receive data from parent
interface RaffleCardProps {
    title: string;
    pricePerTicket: number;
    progress: number;
    totalTickets: number;
    maxTickets: number;
    endDate: string; // ISO string from Backend
}

export const RaffleCard = ({
    title,
    pricePerTicket,
    progress,
    endDate,
    maxTickets,
    totalTickets
} : RaffleCardProps) => {

    // Logic to check is the raffle is expired
    const isExpired = new Date(endDate) < new Date();
    const isSoldOut = progress >= maxTickets;
    const isDisable = isExpired || isSoldOut;
    return(
        <div>
            <div className="px-4">
                {/* Header: Title and Price */}
                <div className="">
                    <h3>
                        ${title}
                    </h3>
                    <span>
                        ${pricePerTicket}
                    </span>
                </div>


                {/* Progress Bar Section */}
                <div>
                    <div>
                        <span>

                        </span>
                    </div>
                </div>

                {/* Status Badges */}
                <div>
                    <div>
                        <Ticket size={24}/>
                        <span></span>
                    </div>
                    <div>
                        <Calendar size={24}/>
                        <span></span>
                    </div>
                </div>
                
                {/* Progress Bar Section */}
                <div>
                    <div>
                        <span></span>
                        <span>
                            {isSoldOut ? 'Completo!' : `${progress}%`}
                        </span>
                    </div>

                    <div>
                        <div>

                        </div>
                    </div>
                </div>

            {/* Overlay Message for disabled raffles */}
            {isDisable && (
                <div>
                    <span>
                        {isSoldOut ? 'Sorteo Completo' : 'Sorteo Finalizado'}
                    </span>
                </div>
            )}
        </div>            
    </div>
    );    
};


















