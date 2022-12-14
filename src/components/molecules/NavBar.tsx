import { BsSearch } from 'react-icons/bs';
import { RiMenuFill } from 'react-icons/ri';
import dynamic from 'next/dynamic';
import Drawer from './Drawer';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const DarkModeSwitch = dynamic(
    () => import('../atoms/DarkModeSwitch')
        .then((mod) => mod.default),
    { ssr: false }
);

const NavBar = () => {

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    useEffect(() => {
        if (drawerOpen) {
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    }, [drawerOpen])

    return (
        <nav className="bg-slate-300 dark:bg-slate-800 shadow-md flex justify-between w-full py-6 px-4">
            <Drawer open={drawerOpen} handleClose={() => setDrawerOpen(false)}/>
            
            <div className="flex items-center gap-4">
                <Link href="/">
                    <p className="text-4xl text-white font-handwriting">Benji Riethmeier</p>
                </Link>
            </div>
            <div className="md:hidden flex justify-center items-center gap-4">
                <DarkModeSwitch />
                <RiMenuFill 
                    onClick={() => setDrawerOpen(true)}
                    className="w-10 h-10 dark:fill-slate-100 cursor-pointer" 
                    data-testid="menu-icon"
                />
                {/* <BsSearch className="w-8 h-8 dark:fill-slate-100"data-testid="search-icon"/> */}
            </div>
        </nav>
    );

}

export default NavBar;