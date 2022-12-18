import Link from "next/link";
import { type FC } from "react";

type NavItemProps = {
    title: string;
    href: string;
}

const NavItem:FC<NavItemProps> = ({ title, href }) => {
    return (
        <li className="text-black dark:text-white">
            <Link href={href}>{title}</Link>
        </li>
    );
};

export default NavItem;