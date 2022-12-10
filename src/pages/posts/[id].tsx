import type { GetStaticPaths, GetStaticProps } from "next";
import type { FC } from "react";
import type { PostData } from "../../types/Posts";
import { getAllPostIds, getPostData } from "../../utils/posts";

type PostProps = {
    post: PostData;
}

const Post: FC<PostProps> = ({ post }) => {
    return (
        <p>{post.id}</p>
    );
};

export default Post;

export const getStaticPaths : GetStaticPaths = async () => {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps : GetStaticProps = async ({ params }) => {
    
    if(!params?.id) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
    
    const postData = getPostData(params.id as string);

    return {
        props: {
            post: postData,
        }
    }
}