import Link from "next/link";
import type { FC } from "react";
import type { PostFrontMatter } from "../../types/Posts";
import { formatMMMMdoYYYY } from "../../utils/dates";
import PostThumbnail from "../atoms/PostThumbnail";
import { AiOutlineArrowRight } from "react-icons/ai";

type PostCoverProps = {
    post: PostFrontMatter & { id: string};
}

const PostCover: FC<PostCoverProps> = ({ post }) => {

    const formattedDate = formatMMMMdoYYYY(post.publishedOn);
    
    const minuteOrMinutes = post.readingTime === 1 ? "minute" : "minutes";

    return (
        <Link href={`/posts/${post.id}`} >
            <article className="group dark:text-white text-black m-5 bg-slate-700 p-5 rounded-lg">
                <PostThumbnail 
                    filename={post.coverImage} 
                    alt={post.coverImageAlt} 
                />
                <p className="text-slate-400 mt-2 2xl:text-xl">
                    {formattedDate}&nbsp;&nbsp;•&nbsp;&nbsp;{post.readingTime} {minuteOrMinutes}
                </p>
                <h3 className="font-bold text-xl 2xl:text-3xl my-1 group-hover:text-rose-500 leading-snug sm:h-16 2xl:h-24 text-black dark:text-white">
                    {post.title}
                </h3>
                <button
                    className="flex gap-2 items-center font-semibold underline-offset-2 sm:text-lg 2xl:text-2xl text-black dark:text-white"
                >
                    Read More
                    <AiOutlineArrowRight 
                        className="fill-rose-500 hidden group-hover:inline h-6 w-6 2xl:h-8 2xl:w-8 animate-bounce"
                    />
                </button>
            </article>
        </Link>
    );
}

export default PostCover;