import type { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostDataMDX } from "../../utils/posts";
import { type FC, useMemo } from 'react';
import type { PostFrontMatter } from "../../types/Posts";
import Layout from "../../components/layout";
import PostHeader from "../../components/posts/PostHeader";
import PostArticle from "../../components/posts/PostArticle";
import { CATEGORIES } from "../../constants/categories";

type PostProps = {
    id: string;
    code: string;
    frontmatter: PostFrontMatter;
}

const Post: FC<PostProps> = ({ frontmatter, code}) => {

    const category = useMemo(
        () => CATEGORIES.find((cat) => cat.id === frontmatter.category), 
        [frontmatter.category]
    );

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