import { Calendar, Ticket } from "lucide-react";
import { Link } from 'react-router-dom';
import type { Raffle } from "../types/raffle";


export const RaffleCard = ({
    id,
    title,
    pricePerTicket,
    progressPercentage,
    endDate,
    maxTickets
} : Raffle) => {

    // Logic to check is the raffle is expired
    const isExpired = new Date(endDate) < new Date();
    const isSoldOut = progressPercentage >= maxTickets;
    const isDisable = isExpired || isSoldOut;
    
    return(
        <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4 transition-opacity ${isDisable ? 'opacity-60' : 'opacity-100'}`}>
            <div className="p-4">
                {/* Header: Title and Price */}
                <div className="flex justify-between items-start mb-2">
                    <h3 className={`font-bold text-lg leading-tight ${isDisable ? 'text-gray-500' : 'text-gray-800'}`}>
                        ${title}
                    </h3>
                    <span className={`${isDisable? 'bg-gray-100 text-gray-400' : 'bg-blue-50 text-primary'} text-xs font-bold px-2 py-1 rounded-lg`}>
                        ${pricePerTicket}
                    </span>
                </div>

                {/* Status Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center text-gray-500 text-xs">
                        <Ticket size={14} className="mr-1"/>
                        <span>{maxTickets} números</span>
                    </div>
                    <div className={`flex items-center text-xs ${isExpired ? 'text-danger font-bold' : 'text-gray-500'}`}>
                        <Calendar size={14} className="mr-1"/>
                        <span>{isExpired ? 'Finalizado' : new Date(endDate).toLocaleDateString()}</span>
                    </div>
                </div>
                
                {/* Progress Bar Section */}
                <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                        <span className="text-gray-400">Progreso</span>
                        <span className={isDisable ? 'text-gray-400' : 'text-primary'}>
                            {isSoldOut ? 'Completo!' : `${progressPercentage}%`}
                        </span>
                    </div>

                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div className={`${isExpired ? 'bg-gray-400' : 'bg-primary'} h-full transition-all duration-500 ease-out`} style={{ width: `${progressPercentage}%` }}>
                        </div>
                    </div>
                </div>

            {/* Overlay Message for disabled raffles */}
            {isDisable && (
                <div className="mt-3 py-1 px-3 bg-gray-50 rounded-lg text-center">
                    <span className="text-xs font-bold bg-gray-500 uppercase tracking-wider">
                        {isSoldOut ? 'Sorteo Completo' : 'Sorteo Finalizado'}
                    </span>
                </div>
            )}
        </div>            
    </div>
    );    
};


















