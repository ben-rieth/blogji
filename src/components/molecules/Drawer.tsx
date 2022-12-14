import { type RefObject, useState, type FC, type LiHTMLAttributes } from "react";
import classNames from "classnames";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Link from "next/link";
import { CATEGORIES } from "../../constants/categories";
import dynamic from "next/dynamic";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const DarkModeSwitch = dynamic(
    () => import('../atoms/DarkModeSwitch')
        .then((mod) => mod.default),
    { ssr: false }
);

interface DrawerLinkProps extends LiHTMLAttributes<HTMLUListElement> {
    title: string;
    href: string;
    onClick: () => void;
}

const DrawerLink: FC<DrawerLinkProps> = ({ title, href, onClick }) => {
    return (
        <li className="my-5" onClick={onClick}>
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

    return (
        <li>
            <div 
                className="flex justify-between cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <p>{title}</p>
                {open ? (
                    <AiOutlineMinus />
                ) : (
                    <AiOutlinePlus />
                )}
            </div>
            <ul 
                className="ml-14"
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
        "transform ease-in-out transition-all duration-500",
        "bg-white/90 dark:bg-slate-800/90 backdrop-blur-md",
        "text-black dark:text-white",
        {
            "translate-x-0" : open,
            "-translate-x-full": !open
        }
    );

    const closeClasses = classNames(
        "fixed top-2 right-2 cursor-pointer fill-black dark:fill-white",
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
            <ul className="mt-20 ml-14 text-5xl w-64 font-handwriting">
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
            <div className="md:hidden ml-14 mt-40 p-5 w-fit">
                <DarkModeSwitch />
            </div>
        </aside>
    )
};

export default Drawer;