import { BsSearch } from 'react-icons/bs';
import { RiMenuFill } from 'react-icons/ri';

import DarkModeSwitch from '../atoms/DarkModeSwitch';

const NavBar = () => {

    return (
        <nav className="bg-slate-100 dark:bg-slate-800 shadow-md flex justify-between w-full p-4">
            <div className="flex items-center gap-2">
                <RiMenuFill className="w-10 h-10 dark:fill-slate-100" data-testid="menu-icon"/>
                <p className="text-4xl dark:text-slate-100">Blogji</p>
            </div>
            <div className="flex justify-center items-center gap-4">
                <DarkModeSwitch />
                <BsSearch className="w-8 h-8 dark:fill-slate-100"data-testid="search-icon"/>
            </div>
        </nav>
    );

}

export default NavBar;