import { type FC } from "react";
import { Breadcrumbs, BreadcrumbsLink } from "../atoms/Breadcrumbs";

type PostHeaderProps = {
    title: string;
    category: string;
}

const PostHeader:FC<PostHeaderProps> = ({ title, category }) => {
    return (
        <header className="h-96 dark:bg-slate-700 bg-slate-300 pt-48 px-10">
            <Breadcrumbs>
                <BreadcrumbsLink title="Home" href="/"/>
                <BreadcrumbsLink title={category} />
            </Breadcrumbs>
            <h1 className="text-white text-3xl sm:text-4xl font-semibold">{title}</h1>
        </header>
    )
    
};

export default PostHeader;