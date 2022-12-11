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
            <article className="group dark:text-white text-black w-1/2 m-5">
                <PostThumbnail 
                    filename={post.coverImage} 
                    alt={post.coverImageAlt} 
                />
                <h2 className="font-bold text-2xl my-2 group-hover:text-sky-500">{post.title}</h2>
                <button
                    className="font-semibold underline-offset-2"
                >
                    Read More
                </button>
            </article>
        </Link>
    );
}

export default PostCover;