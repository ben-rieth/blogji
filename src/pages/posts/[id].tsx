import type { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostDataMDX } from "../../utils/posts";
import { type FC, useMemo, useEffect, useState } from 'react';
import type { PostFrontMatter } from "../../types/Posts";
import Layout from "../../components/layout";
import PostHeader from "../../components/posts/PostHeader";
import PostArticle from "../../components/posts/PostArticle";
import { CATEGORIES } from "../../utils/constants/categories.js";
import axios, { AxiosError } from "axios";
import { env } from "../../env/client.mjs";
import PostFooter from "../../components/posts/PostFooter";

type PostProps = {
    id: string;
    code: string;
    frontmatter: PostFrontMatter;
}

const Post: FC<PostProps> = ({ frontmatter, code}) => {

    const [views, setViews] = useState<number | undefined>(undefined);

    const category = useMemo(
        () => CATEGORIES.find((cat) => cat.id === frontmatter.category), 
        [frontmatter.category]
    );

    useEffect(() => {

        (async () => {
            try {
                const response = await axios.post(
                    `${env.NEXT_PUBLIC_URL}/api/posts/views`, 
                    { 
                        title: frontmatter.title
                    }
                ).then(res => res.data);

                setViews(response?.views);

                } catch (err) {
                    if (err instanceof AxiosError) {
                        console.log(err.request);
                    }
                    console.log(err);
                }
        })();

    }, [frontmatter.title]);

    return (
        <Layout 
            title={frontmatter.title}
            description={frontmatter.abstract}
        >
            <PostHeader 
                title={frontmatter.title}
                category={category ? category : { id: 'misc', main: "Misc", sub: ""}}
            />
            <PostArticle articleCode={code} />
            <PostFooter date={frontmatter.publishedOn} views={views} />
        </Layout>
    );
}

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
    
    const postData = await getPostDataMDX(params.id as string);

    return {
        props: {
            ...postData 
        }
    }
}