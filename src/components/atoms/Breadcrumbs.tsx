import Link from "next/link";
import { type FC } from "react";

type BreadcrumbLinkProps = {
    title: string;
    href?: string | undefined;
}

const BreadcrumbsLink:FC<BreadcrumbLinkProps> = ({ title, href }) => {
    return (
        <li className="dark:text-slate-400 text-slate-600 text-xl">
            {href ? (
                <>
                    <Link 
                        href={href} 
                        className="hover:underline"
                    >
                        {title}
                    </Link>
                    &nbsp;&nbsp;&gt;&nbsp;&nbsp;
                </>
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