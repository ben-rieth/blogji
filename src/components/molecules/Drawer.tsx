import { type FC } from "react";
import classNames from "classnames";
import { AiOutlineClose } from 'react-icons/ai';

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
        <aside className={drawerClasses}>
            <AiOutlineClose 
                className={closeClasses}
                onClick={handleClose}
            />
            <ul>
                <li>Home</li>
                <li>Latest Posts</li>
                <ul>
                    <li>Web Dev</li>
                    <li>Psychology</li>
                    <li>Misc</li>
                </ul>
            </ul>
        </aside>
    )
};

export default Drawer;