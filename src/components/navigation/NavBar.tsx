import { RiMenuFill } from 'react-icons/ri';
import dynamic from 'next/dynamic';
import Drawer from './Drawer';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavItem from '../navigation/NavItem';
import NavItemWithDropdown from './NavItemWithDropdown';
import { CATEGORIES } from '../../utils/constants/categories.js';
import { BLOG_HOME, categoryLinkFromId, LATEST_POSTS } from '../../utils/links';
import Name from '../general/Name';

const DarkModeSwitch = dynamic(
    () => import('../general/DarkModeSwitch')
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
        <nav 
            suppressHydrationWarning
            className="bg-neutral-200 dark:bg-slate-700 shadow-lg flex justify-between w-full py-6 px-5 transition-colors duration-300"
        >
            <Drawer open={drawerOpen} handleClose={() => setDrawerOpen(false)}/>
            
            <div className="flex items-center gap-4">
                <Link href={BLOG_HOME}>
                    <Name />
                </Link>
            </div>
            <div className="md:hidden flex justify-center items-center gap-4">
                <DarkModeSwitch />
                <RiMenuFill 
                    onClick={() => setDrawerOpen(true)}
                    className="w-6 h-6 xs:w-8 xs:h-8 dark:fill-slate-100 cursor-pointer" 
                    data-testid="menu-icon"
                />
            </div>
            <ul className="hidden md:flex justify-between items-center gap-8 font-handwriting text-2xl font-semibold">
                <NavItem title="Latest Posts" href={LATEST_POSTS} />
                <NavItemWithDropdown 
                    title="Categories" 
                    items={CATEGORIES.map((category) => (
                        { title: category.main, href: categoryLinkFromId(category.id)}
                    ))}
                />
                <li><DarkModeSwitch /></li>
            </ul>
        </nav>
    );

}

export default NavBar;