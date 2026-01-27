import { Home, Ticket, User, PlusCircle } from 'lucide-react';

//Bottom navigation for mobile-first experience
export const Bottom = () => {
    return(
        <nav className='fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center z-50'>
            <button className='flex flex-col items-center text-primary'>
                <Home size={24}/>
                <span className='text-xs mt-1'>Inicio</span>
            </button>
            <button className='flex flex-col items-center text-gray-400'>
                <Ticket size={24}/>
                <span className='text-xs mt-1'>Mis Rifas</span>
            </button>
            <button className='flex flex-col items-center text-gray-400'>
                <PlusCircle size={40} className='text-primary -mt-6 bg-white rounded-full border-4 border-white'/>
                <span className='text-xs mt-1'>Crear</span>
            </button>
            <button className='flex flex-col items-center text-gray-400'>
                <User size={24}/>
                <span className='text-xs mt-1'>Perfil</span>
            </button>
        </nav>
    );
};
