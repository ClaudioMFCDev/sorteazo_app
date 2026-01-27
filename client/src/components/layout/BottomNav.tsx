import { NavLink } from 'react-router-dom';
import { Home, Ticket, User, PlusCircle } from 'lucide-react';


//Bottom navigation for mobile-first experience
export const Bottom = () => {

    // Utility function to handle anctive/inactive styles
    // If isActive is true (provided by NavLink), we return blue. otherwise gray
    const navItemStyles = ({ isActive }: { isActive: boolean}) => 
        `flex flex-col items-center transition-colors ${isActive ? 'text-primary' : 'text-gray-400'}`;

    return(
        <nav className='fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center z-50'>

            {/* NavLink monitors the Url and changes its style automatically */}
            <NavLink to='/' className={navItemStyles}>
                <Home size={24}/>
                <span className='text-xs mt-1'>Inicio</span>
            </NavLink>
            <NavLink to='/mis-rifas' className={navItemStyles}>
                <Ticket size={24}/>
                <span className='text-xs mt-1'>Mis Rifas</span>
            </NavLink>
            {/* For the main action button, we might want a different logic, but let's keep simple for now */}
            <NavLink to='/crear' className={navItemStyles}>
                <div>
                    <PlusCircle size={48} className='text-primary -mt-8 bg-white rounded-full border-4 border-white shadow-lg'/>
                </div>
                <span className='text-xs mt-1'>Crear</span>
            </NavLink>
            <NavLink to='/perfil' className={navItemStyles}>
                <User size={24}/>
                <span className='text-xs mt-1'>Perfil</span>
            </NavLink>
        </nav>
    );
};
