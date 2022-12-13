import { type FC } from "react";
import classNames from "classnames";
import { AiOutlineClose } from 'react-icons/ai';
import Link from "next/link";
import { CATEGORIES } from "../../constants/categories";

type DrawerLinkProps = {
    title: string;
    href: string;
}

const DrawerLink: FC<DrawerLinkProps> = ({ title, href }) => {
    return (
        <li className="my-1">
            <Link href={href}>
                {title}
            </Link>
        </li>
    );
};

type DrawerAccordionProps = {
    title: string;
    children: JSX.Element | JSX.Element[];
};

const DrawerAccordion:FC<DrawerAccordionProps> = ({ title, children }) => {
    
    return (
        <li>
            <p>{title}</p>
            <ul className="ml-5">
                {children}
            </ul>
        </li>
    );
};

type DrawerProps = {
    open: boolean;
    handleClose: () => void;
}

const Drawer:FC<DrawerProps> = ({ open, handleClose }) => {
    
    const drawerClasses = classNames(
        "fixed top-0 left-0 w-full bg-white/90 z-30 h-full",
        "transform ease-in-out transition-all duration-500",
        "backdrop-blur-sm",
        {
            "translate-x-0" : open,
            "-translate-x-full": !open
        }
    );

    const closeClasses = classNames(
        "fixed top-2 right-2 cursor-pointer fill-black",
        "h-12 w-12 ml-2",
        {
            "hidden": !open
        },
    )

    return (
        <aside className={drawerClasses} onClick={handleClose}>
            <AiOutlineClose 
                className={closeClasses}
                onClick={handleClose}
            />
            <ul className="mt-20 ml-5 text-4xl">
                <DrawerLink title="Home" href="/" />
                <DrawerLink title="Latest Posts" href="/" />
                <DrawerAccordion title="Categories">
                    {CATEGORIES.map((category) => (
                        <DrawerLink 
                            key={category.id} 
                            title={category.main} 
                            href={`/category/${category.id}`}
                        />
                    ))}
                </DrawerAccordion>
            </ul>
        </aside>
    )
};

export default Drawer;