import { type FC } from "react";
import { Breadcrumbs, BreadcrumbsLink } from "../atoms/Breadcrumbs";

type PostHeaderProps = {
    title: string;
    category: string;
}

const PostHeader:FC<PostHeaderProps> = ({ title, category }) => {
    return (
        <header className="h-80 dark:bg-slate-700 bg-slate-300 pt-44 pb-12">
            <div className="mx-auto max-w-screen-lg px-10">
                <Breadcrumbs>
                    <BreadcrumbsLink title="Home" href="/"/>
                    <BreadcrumbsLink title={category} />
                </Breadcrumbs>
                <h1 className="text-slate-800 dark:text-white text-3xl sm:text-4xl font-semibold mt-3">{title}</h1>
            </div>
        </header>
    )
    
};

export default PostHeader;