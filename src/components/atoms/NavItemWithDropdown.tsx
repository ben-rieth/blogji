import classNames from "classnames";
import { type FC, useState, type RefObject, useRef } from "react";
import { RxCaretDown, RxCaretUp } from 'react-icons/rx';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Link from "next/link";
import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";

type NavItemWithDropdownProps = {
    title: string;
    items: { title: string, href: string }[];
}

const NavItemWithDropdown : FC<NavItemWithDropdownProps> = ({ title, items }) => {
    
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const [parentRef] = useAutoAnimate();

    const dropdownRef = useRef<HTMLDivElement>();
    useDetectOutsideClick(dropdownRef, () => setDropdownOpen(false));

    const itemClasses = classNames(
        "text-black dark:text-white font-handwriting text-2xl",
        "relative"
    );
    
    return (
        <li 
            className={itemClasses} 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            ref={parentRef as RefObject<HTMLLIElement>}
        >
            <div className="flex items-center gap-2 cursor-pointer">
                {title}
                {dropdownOpen ? <RxCaretUp /> :<RxCaretDown />}
            </div>
            {dropdownOpen && (
                <div 
                    ref={dropdownRef as RefObject<HTMLDivElement>}
                    className="bg-white text-black absolute -left-14 top-10 p-5 grid grid-cols-2 w-56 rounded"
                >
                    {items.map((item, index) => (
                        <Link 
                            href={item.href} 
                            key={`${title}-${index}`}
                            className="hover:text-cyan-500"
                        >
                                {item.title}
                        </Link>
                    ))}
                </div>
            )}
        </li>
    );
}

export default NavItemWithDropdown;