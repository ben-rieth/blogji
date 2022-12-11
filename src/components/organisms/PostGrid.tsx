import { type FC } from "react";
import { type PostFrontMatter } from "../../types/Posts";
import PostCover from "../molecules/PostCover";

type PostGridProps = {
    posts: (PostFrontMatter & { id: string })[];
    title: string;
}

const PostGrid:FC<PostGridProps> = ({ posts, title }) => {
    return (
        <div className="my-3">
            <h2 className="font-bold text-3xl text-white ml-5">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4">
                {posts.map((post) => (
                    <PostCover key={post.id} post={post}/>
                ))}
            </div>
        </div>
        
    )
};

export default PostGrid;