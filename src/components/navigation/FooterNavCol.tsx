import { type ReactNode, type FC } from "react";

type FooterNacColProps = {
    title: string;
    children: ReactNode;
}

const FooterNavCol:FC<FooterNacColProps> = ({ title, children }) => {
    return (
        <div>
            <p className="text-slate-400">{title}</p>
            <ul>
                {children}
            </ul>
        </div>
    )
};

export default FooterNavCol;