import classNames from "classnames";
import { type ReactNode, type FC } from "react";

type FooterNacColProps = {
    title: string;
    children: ReactNode;
    grid?:boolean;
}

const FooterNavCol:FC<FooterNacColProps> = ({ title, children, grid=false }) => {
    
    const classes = classNames(
        {
            "grid grid-cols-2 gap-x-3": grid,
            "flex flex-col": !grid,
        },
        "text-sm",
        "gap-1"
    )
    
    return (
        <div className="flex flex-col gap-2">
            <p className="text-slate-500">{title}</p>
            <ul className={classes}>
                {children}
            </ul>
        </div>
    )
};

export default FooterNavCol;