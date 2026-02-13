import { useParams, useNavigate } from "react-router-dom";
import { useRaffle } from "../hooks/useRaffle";
import { ArrowLeft, Calendar, Ticket, ShieldCheck } from 'lucide-react';

export const RaffleDetail = () => {
    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();

    // Custom hook handles all the logic: API call, loading, and error states.
    const { raffle, loading, error } = useRaffle(id )
} 
