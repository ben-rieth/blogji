import Link from "next/link";
import type { FC } from "react";
import type { PostFrontMatter } from "../../types/Posts";

type PostCoverProps = {
    post: PostFrontMatter & { id: string};
}

const PostCover: FC<PostCoverProps> = ({ post }) => {
    return (
        <article className="text-white dark:text-black">
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.id}</p>
            <Link href={`/posts/${post.id}`}>Link</Link>
        </article>
    );
}

export default PostCover;