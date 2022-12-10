import type { FC } from "react";
import type { PostData } from "../../types/Posts";

type PostCoverProps = {
    post: PostData;
}

const PostCover: FC<PostCoverProps> = ({ post }) => {
    return (
        <article className="text-white dark:text-black">
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.id}</p>
        </article>
    );
}

export default PostCover;