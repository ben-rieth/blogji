import { type FC } from "react";
import { type Category } from "../../types/Posts";
import { BLOG_HOME, categoryLinkFromId } from "../../utils/links";
import { Breadcrumbs, BreadcrumbsLink } from "../navigation/Breadcrumbs";
import Image from 'next/image';
import { formatMMMMdoYYYY } from "../../utils/dates";

type PostHeaderProps = {
    title: string;
    category: Category;
    coverImage: string;
    coverImageAlt: string;
    readingTime: number | undefined;
    publishDate: string;
}

const PostHeader:FC<PostHeaderProps> = ({ title, category, coverImage, coverImageAlt, readingTime, publishDate }) => {

    return (
        <header className="dark:bg-slate-700 bg-neutral-200 pb-5 transition-colors duration-300">
            <div className="mx-auto max-w-screen-lg px-7 sm:px-10">
                <Breadcrumbs>
                    <BreadcrumbsLink title="Home" href={BLOG_HOME}/>
                    <BreadcrumbsLink title={category.main} href={categoryLinkFromId(category.id)} last />
                </Breadcrumbs>

                <div className="relative aspect-video my-5 md:mx-5">
                    <Image 
                        className="object-cover rounded-lg"
                        src={`/thumbnails/${coverImage}`}
                        alt={coverImageAlt}
                        fill
                    />
                </div>
                
                <h1 
                    className="text-slate-800 dark:text-white text-4xl sm:text-5xl font-semibold font-handwriting mb-2"
                >
                    {title}
                </h1>
                
                <p className="dark:text-slate-400 text-slate-600 text-md pl-0.5">
                    {formatMMMMdoYYYY(publishDate)} | {readingTime} min read
                </p>
            </div>
        </header>
    )
    
};

export default PostHeader;