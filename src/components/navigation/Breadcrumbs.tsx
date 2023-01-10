import Link from "next/link";
import { type FC } from "react";

type BreadcrumbLinkProps = {
    title: string;
    href?: string | undefined;
    last?: boolean;
}

const BreadcrumbsLink:FC<BreadcrumbLinkProps> = ({ title, href, last }) => {
    return (
        <li className="dark:text-slate-400 text-slate-600 text-lg">
            {href ? (
                <p>
                    <Link 
                        href={href} 
                        className="hover:underline"
                    >
                        {title}
                    </Link>
                    {!last && <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>}
                </p>
            ) : (
                <p>{title}</p>
            )}
        </li>
    )
}

type BreadcrumbProps = {
    children: JSX.Element[];
}

const Breadcrumbs:FC<BreadcrumbProps> = ({ children }) => {
    return (
        <ul className="flex">
            {children}
        </ul>
    )
}

export {
    Breadcrumbs,
    BreadcrumbsLink
}