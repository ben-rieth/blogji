import Link from "next/link";
import { type FC } from "react";

type NavItemProps = {
    title: string;
    href: string;
}

const NavItem:FC<NavItemProps> = ({ title, href }) => {
    return (
        <li className="text-neutral-900 dark:text-neutral-200">
            <Link href={href}>{title}</Link>
        </li>
    );
};

export default NavItem;