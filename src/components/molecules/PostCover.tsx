import Link from "next/link";
import type { FC } from "react";
import type { PostFrontMatter } from "../../types/Posts";
import PostThumbnail from "../atoms/PostThumbnail";

type PostCoverProps = {
    post: PostFrontMatter & { id: string};
}

const PostCover: FC<PostCoverProps> = ({ post }) => {
    return (
        <Link href={`/posts/${post.id}`} >
            <article className="group dark:text-white text-black m-5">
                <PostThumbnail 
                    filename={post.coverImage} 
                    alt={post.coverImageAlt} 
                />
                <h3 className="font-bold text-2xl 2xl:text-4xl my-2 group-hover:text-sky-500 sm:line-clamp-3 leading-snug sm:h-24 2xl:h-32">{post.title}</h3>
                <button
                    className="font-semibold underline-offset-2 sm:text-lg 2xl:text-2xl"
                >
                    Read More
                </button>
            </article>
        </Link>
    );
}

export default PostCover;