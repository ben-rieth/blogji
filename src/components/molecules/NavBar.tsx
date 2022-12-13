import { BsSearch } from 'react-icons/bs';
import { RiMenuFill } from 'react-icons/ri';
import dynamic from 'next/dynamic';
import Drawer from './Drawer';
import { useState } from 'react';

const DarkModeSwitch = dynamic(
    () => import('../atoms/DarkModeSwitch')
        .then((mod) => mod.default),
    { ssr: false }
);

const NavBar = () => {

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    return (
        <nav className="bg-slate-300 dark:bg-slate-800 shadow-md flex justify-between w-full p-4">
            <Drawer open={drawerOpen} handleClose={() => setDrawerOpen(false)}/>
            
            <div className="flex items-center gap-2">
                <RiMenuFill 
                    onClick={() => setDrawerOpen(true)}
                    className="w-10 h-10 dark:fill-slate-100" 
                    data-testid="menu-icon"
                />
                <p className="text-4xl dark:text-slate-100">Benji&apos;s Blog</p>
            </div>
            <div className="hidden md:flex justify-center items-center gap-4">
                <DarkModeSwitch />
                <BsSearch className="w-8 h-8 dark:fill-slate-100"data-testid="search-icon"/>
            </div>
        </nav>
    );

}

export default NavBar;