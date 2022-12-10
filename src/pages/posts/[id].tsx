import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import type { FC } from "react";
import type { PostDataWithContent } from "../../types/Posts";
import { getAllPostIds, getPostData } from "../../utils/posts";

type PostProps = {
    post: PostDataWithContent;
}

const Post: FC<PostProps> = ({ post }) => {
    return (
        <div>
            <Head>
                <title>{post.title}</title>
            </Head>
            <p>{post.id}</p>
            <div dangerouslySetInnerHTML={{__html: post.content}} />
        </div>
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
    
    const postData = await getPostData(params.id as string);

    return {
        props: {
            post: postData,
        }
    }
}