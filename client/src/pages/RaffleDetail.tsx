import { useParams, useNavigate } from "react-router-dom";
import { useRaffle } from "../hooks/useRaffle";
import { ArrowLeft, Calendar, Ticket, ShieldCheck } from 'lucide-react';
import { useState } from "react";

export const RaffleDetail = () => {
    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();
    const [selectNumber, setSelectedNumber] = useState<number | null>(null);

    // Custom hook handles all the logic: API call, loading, and error states.
    const { raffle, loading, error } = useRaffle(id || '' );

    if (loading) return (
        <div className="flex justify-center items-center h-screen">
            <p className="animate-pulse text-primary font-bold">Cargando sorteo</p>
        </div>
    );

    if (error || !raffle) return (
        <div className="p-4 text-center">
            <p className="text-danger">No pudimos encontrar este sorteo.</p>
            <button onClick={() => navigate('/')} className="mt-4 text-primary underline">
                Volver al inicio
            </button>
        </div>
    );

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Top Navigation */}
            <div className="p-4 flex items-center gap-4 border-b">
                <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full">
                    <ArrowLeft size={24} />
                </button>
                <h1 className="font-bold text-lg truncate">{raffle.title}</h1>
            </div>

            <div className="p-4 space-y-6">
                {/* Visual Badge and Price */}
                <div className="flex justify-between items-center bg-blue-50 p-4 rounded-2xl">
                    <div>
                        <p className="text-sm text-blue-600 font-medium">Precio por número</p>
                        <p className="text-2xl font-black text-primary">{raffle.pricePerTicket}</p>
                    </div>
                    <ShieldCheck size={40} className="text-blue-200"/>
                </div>

                {/* Description Section */}
                <section>
                    <h2 className="font-bold text-gray-800 mb-2">Description</h2>
                    <p className="text-gray-600 leading-relaxed">
                        {raffle.description || 'Sin descripción disponible.'}
                    </p>
                </section>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 border rounded-xl border-gray-100">
                        <Calendar size={20} className="text-primary mb-2"/>
                        <p className="text-xs text-gray-400">Finaliza el</p>
                        <p className="text-sm font-bold">{new Date(raffle.endDate).toLocaleDateString()}</p>
                    </div>
                    <div className="p-3 border rounded-xl border-gray-100">
                        <Ticket size={20} className="text-primary mb-2"/>
                        <p className="text-xs text-gray-400">Disponibles</p>
                        <p>{raffle.maxTickets} números</p>
                    </div>
                </div>

                {/* New Button */}
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 pb-10">
                    <div className="max-w-md mx-auto">
                        {selectNumber ? (
                            <button
                                className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 active:scale-95 transition-all flex justify-between px-6 items-center"
                                onClick={() => alert(`Iniciando compra del número ${selectNumber}`)}
                            >
                                <span>Confirmar Número {selectNumber}</span>
                                <span className="bg-white/20 px-3 py-1 rounded-lg text-sm ">
                                    ${raffle.pricePerTicket}
                                </span>
                            </button>
                        ) : (
                            <div className="w-full bg-gray-100 text-gray-400 py-4 rounded-2xl font-bold text-center border-2 border-dashed border-gray-200">
                                Seleccioná un número para continuar
                            </div>
                        )}
                    </div>
                </div>

                {/* Floating Action Button CTA */}
                {/* <div className="fixed bottom-24 left-4 right-4">
                    <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-blue-200 active:scale-95 transition-transform">
                        Comprar Tickets
                    </button>
                </div> */}
            </div>
        </div>
    );
};