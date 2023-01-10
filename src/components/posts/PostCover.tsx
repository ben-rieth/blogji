import Link from "next/link";
import type { FC } from "react";
import type { PostFrontMatter } from "../../types/Posts";
import { formatMMMMdoYYYY } from "../../utils/dates";
import PostThumbnail from "../posts/PostThumbnail";
import { postLinkFromId } from "../../utils/links";
import { CATEGORIES } from "../../utils/constants/categories";

type PostCoverProps = {
    post: PostFrontMatter & { id: string};
}

const PostCover: FC<PostCoverProps> = ({ post }) => {

    const formattedDate = formatMMMMdoYYYY(post.publishedOn);

    const category = CATEGORIES.find((item) => item.id === post.category)?.main;

    return (
        <Link href={postLinkFromId(post.id)} >
            <article className="group dark:text-white text-black bg-neutral-200 dark:bg-slate-700 p-5 rounded-lg hover:scale-105 transform scale-100 transition-transform duration-400 ease-in-out">
                <PostThumbnail 
                    filename={post.coverImage} 
                    alt={post.coverImageAlt} 
                />
                <p className="text-slate-400 uppercase font-semibold mt-2 text-sm 2xl:text-lg">
                    {category}
                </p>
                <h3 className="font-semibold text-xl 2xl:text-3xl group-hover:text-rose-500 leading-snug sm:h-24 2xl:h-32 text-black dark:text-white">
                    {post.title}
                </h3>
                
                {/* <button
                    className="flex gap-2 items-center font-semibold underline-offset-2 sm:text-lg 2xl:text-2xl text-black dark:text-white"
                >
                    Read More
                    <AiOutlineArrowRight 
                        className="fill-rose-500 hidden group-hover:inline h-6 w-6 2xl:h-8 2xl:w-8 animate-bounce"
                    />
                </button>  */}
                <p className="text-slate-400 text-sm md:text-base 2xl:text-xl">
                    {formattedDate}&nbsp;&nbsp;•&nbsp;&nbsp;{post.readingTime} min read
                </p>  
            </article>
        </Link>
    );
}

export default PostCover;