import { type FC } from "react";
import { type Category } from "../../types/Posts";
import { Breadcrumbs, BreadcrumbsLink } from "../atoms/Breadcrumbs";

type PostHeaderProps = {
    title: string;
    category: Category;
}

const PostHeader:FC<PostHeaderProps> = ({ title, category }) => {
    return (
        <header className="dark:bg-slate-700 bg-slate-300 pt-40 pb-5">
            <div className="mx-auto max-w-screen-lg px-10">
                <Breadcrumbs>
                    <BreadcrumbsLink title="Home" href="/"/>
                    <BreadcrumbsLink title={category.main} href={`/category/${category.id}`} last />
                </Breadcrumbs>
                <h1 className="text-slate-800 dark:text-white text-4xl sm:text-5xl font-semibold mt-3 mb-6 font-handwriting">{title}</h1>
            </div>
        </header>
    )
    
};

export default PostHeader;