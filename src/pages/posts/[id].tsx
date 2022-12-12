import type { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostDataMDX } from "../../utils/posts";
import { getMDXComponent } from 'mdx-bundler/client';
import type { FC} from 'react';
import { useMemo } from 'react';
import type { PostFrontMatter } from "../../types/Posts";
import Layout from "../../components/layout";
import PostHeader from "../../components/molecules/PostHeader";

type PostProps = {
    id: string;
    code: string;
    frontmatter: PostFrontMatter;
}

const PostWithMDX: FC<PostProps> = ({ frontmatter, code}) => {

    const Component = useMemo(() => getMDXComponent(code), [code])

    return (
        <Layout title={frontmatter.title}>
            <PostHeader 
                title={frontmatter.title}
                category={frontmatter.category}
            />
            <article className="text-white">
                <Component />
            </article>
        </Layout>
    );
}

export default PostWithMDX;

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