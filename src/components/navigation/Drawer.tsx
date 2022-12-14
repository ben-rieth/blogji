import { type RefObject, useState, type FC, type LiHTMLAttributes } from "react";
import classNames from "classnames";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Link from "next/link";
import { CATEGORIES } from "../../utils/constants/categories.js";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface DrawerLinkProps extends LiHTMLAttributes<HTMLUListElement> {
    title: string;
    href: string;
    onClick: () => void;
}

const DrawerLink: FC<DrawerLinkProps> = ({ title, href, onClick }) => {
    return (
        <li className="my-5 hover:text-rose-500 hover:underline underline-offset-4" onClick={onClick}>
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
    
    const [open, setOpen] = useState<boolean>(true);
    const [parent] = useAutoAnimate();

    const iconClass = classNames(
        "fill-neutral-900 dark:fill-neutral-100 group-hover:fill-rose-500"
    );

    return (
        <li className="group">
            <div 
                className="flex gap-10 items-center cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <p className="group-hover:text-rose-500">{title}</p>
                {open ? (
                    <AiOutlineMinus className={iconClass}/>
                ) : (
                    <AiOutlinePlus className={iconClass} />
                )}
            </div>
            <ul 
                className="ml-8"
                ref={parent as RefObject<HTMLUListElement>}
            >
                {open && children}
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
        "fixed top-0 left-0 w-full z-30 h-full",
        "transform ease-in-out transition-transform duration-500",
        "bg-white/70 dark:bg-slate-800/90 backdrop-blur-md",
        "text-neutral-900 dark:text-neutral-100",
        {
            "translate-x-0" : open,
            "-translate-x-full": !open
        }
    );

    const closeClasses = classNames(
        "fixed top-4 right-4 cursor-pointer fill-black dark:fill-white",
        "h-12 w-12 ml-2",
        {
            "hidden": !open
        },
    );

    return (
        <aside className={drawerClasses}>
            <AiOutlineClose 
                className={closeClasses}
                onClick={handleClose}
            />
            <ul className="mt-20 ml-14 text-3xl md:text-5xl w-64 font-handwriting">
                <DrawerLink title="Home" href="/" onClick={handleClose}/>
                <DrawerLink title="Latest Posts" href="/" onClick={handleClose}/>
                <DrawerAccordion title="Categories">
                    {CATEGORIES.map((category) => (
                        <DrawerLink 
                            key={category.id} 
                            title={category.main} 
                            href={`/category/${category.id}`}
                            onClick={handleClose}
                        />
                    ))}
                </DrawerAccordion>
            </ul>
        </aside>
    )
};

export default Drawer;