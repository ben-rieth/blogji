import Link from "next/link";
import type { FC } from "react";
import type { PostFrontMatter } from "../../types/Posts";
import { formatMMMMdoYYYY } from "../../utils/dates";
import PostThumbnail from "../atoms/PostThumbnail";

type PostCoverProps = {
    post: PostFrontMatter & { id: string};
}

const PostCover: FC<PostCoverProps> = ({ post }) => {

    const formattedDate = formatMMMMdoYYYY(post.publishedOn);
    
    const minuteOrMinutes = post.readingTime === 1 ? "minute" : "minutes";

    return (
        <Link href={`/posts/${post.id}`} >
            <article className="group dark:text-white text-black m-5">
                <PostThumbnail 
                    filename={post.coverImage} 
                    alt={post.coverImageAlt} 
                />
                <p className="text-slate-400 mt-2  sm:text-lg 2xl:text-2xl">
                    {formattedDate}&nbsp;&nbsp;•&nbsp;&nbsp;{post.readingTime} {minuteOrMinutes}
                </p>
                <h3 className="font-bold text-2xl 2xl:text-4xl my-1 group-hover:text-sky-500 sm:line-clamp-3 leading-snug sm:h-24 2xl:h-32 text-black dark:text-white">
                    {post.title}
                </h3>
                <button
                    className="font-semibold underline-offset-2 sm:text-lg 2xl:text-2xl text-black dark:text-white"
                >
                    Read More
                </button>
            </article>
        </Link>
    );
}

export default PostCover;