import Link from "next/link";
import { type FC } from "react";

type NavItemProps = {
    title: string;
    href: string;
    icon?: JSX.Element
}

const NavItem:FC<NavItemProps> = ({ title, href, icon }) => {
    return (
        <li className="flex items-center gap-1 text-neutral-900 dark:text-neutral-200">
            {icon ? icon : null}
            <Link href={href}>{title}</Link>
        </li>
    );
};

export default NavItem;