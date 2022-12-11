import Link from "next/link";
import type { FC } from "react";
import type { PostFrontMatter } from "../../types/Posts";
import PostThumbnail from "../atoms/PostThumbnail";

type PostCoverProps = {
    post: PostFrontMatter & { id: string};
}

const PostCover: FC<PostCoverProps> = ({ post }) => {
    return (
        <article className="dark:text-white text-black">
            <PostThumbnail 
                filename={post.coverImage} 
                alt={post.coverImageAlt} 
            />
            <h2>{post.title}</h2>
            <p>{post.abstract}</p>
            <Link href={`/posts/${post.id}`}>Read More</Link>
        </article>
    );
}

export default PostCover;