import type { RefObject, FC } from "react";
import { type PostFrontMatter } from "../../types/Posts";
import WIP from "../general/WIP";
import PostCover from "../posts/PostCover";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type PostGridProps = {
    posts: (PostFrontMatter & { id: string })[];
    title?: string;
}

const PostGrid:FC<PostGridProps> = ({ posts, title }) => {

    const [parentRef] = useAutoAnimate();

    return (
        <div className="my-10 mx-5 md:mx-10">
            {title && <h2 className="font-bold text-3xl text-black dark:text-white mb-5">{title}</h2>}
            <div 
                ref={parentRef as RefObject<HTMLDivElement>}
                className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4"
            >
                {posts.map((post) => (
                    <PostCover key={post.id} post={post}/>
                ))}
            </div>
            {posts.length === 0 && (
                <WIP />
            )}
        </div>
        
    )
};

export default PostGrid;