import type { Raffle } from '../types/raffle';
import type { TicketGridProps } from '../types/ticket';

// TicketGrid Component
export const TicketGrid = ({
    maxTickets,
    selectNumber,
    onSelect,
    soldTickets
}: TicketGridProps) => {

    // Logic: Generate an array of numbers from 1 up to maxTickets
    const numbers = Array.from({ length: maxTickets }, (_, i) => i + 1);

    return (
        <div className='grid grid-cols-5 gap-2 mt-4'>
            {numbers.map((num) => {
                const isSold = soldTickets.includes(num);
                const isSelected = selectNumber === num;

                return (
                    <button
                    key={num}
                    disabled={isSold}
                    onClick={() => onSelect(num)}
                    className={`
                        aspect-square rounded-xl text-sm font-bold transition-all duration-200 flex intems-center justify-center border-2 ${isSold
                            ? 'bg-gray-100 border-transparent text-gray-300 cursor-not-allowed'
                            : isSelected
                            ? 'bg-primary border-primary text-white shadow-md scale-105 z-10'
                            : 'bg-white border-gray-100 text-gray-600 active:bg-blue-50 active:scale-95'
                        }
                    `}
                >
                    {num}
                </button>
                );
            })}
        </div>
    );
};
