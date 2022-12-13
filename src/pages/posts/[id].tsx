import type { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostDataMDX } from "../../utils/posts";
import type { FC} from 'react';
import type { PostFrontMatter } from "../../types/Posts";
import Layout from "../../components/layout";
import PostHeader from "../../components/molecules/PostHeader";
import PostArticle from "../../components/molecules/PostArticle";

type PostProps = {
    id: string;
    code: string;
    frontmatter: PostFrontMatter;
}

const Post: FC<PostProps> = ({ frontmatter, code}) => {

    return (
        <Layout 
            title={frontmatter.title}
            description={frontmatter.abstract}
        >
            <PostHeader 
                title={frontmatter.title}
                category={frontmatter.category}
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