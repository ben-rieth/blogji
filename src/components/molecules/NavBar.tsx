import { BsSearch } from 'react-icons/bs';
import { IoMenu } from 'react-icons/io5';

import DarkModeSwitch from '../atoms/DarkModeSwitch';

const NavBar = () => {

    return (
        <nav className="bg-slate-100 shadow-md flex justify-between w-full p-4">
            <div className="flex items-center gap-2">
                <IoMenu className="w-10 h-10" data-testid="menu-icon"/>
                <p className="text-3xl">Blogji</p>
            </div>
            <div className="flex justify-center items-center gap-4">
                <DarkModeSwitch />
                <BsSearch className="w-8 h-8"data-testid="search-icon"/>
            </div>
        </nav>
    );

}

export default NavBar;