import { type GetStaticProps, type GetStaticPaths, type NextPage } from "next"
import { useRouter } from "next/router";
import WIP from "../../components/atoms/WIP";
import Layout from "../../components/layout";
import Hero from "../../components/molecules/Hero";
import PostGrid from "../../components/organisms/PostGrid";
import { CATEGORIES } from "../../constants/categories";
import { type PostFrontMatter } from "../../types/Posts";
import { getAllCategoryIds, getSortedPostsDataFromCategory } from "../../utils/posts"

type CategoryProps = {
    posts: (PostFrontMatter & { id: string })[];
}

const Category: NextPage<CategoryProps> = ({ posts }) => {

    const router = useRouter();
    const { id } = router.query;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const category = CATEGORIES.find((category) => category.id === id)!;

    return (
        <Layout 
            title={id as string}
            description={category.sub}
        >
            <Hero main={category.main} sub={category.sub} />
            <PostGrid posts={posts} title="Recent Posts"/>
            <WIP />
        </Layout>
    )
}

export default Category;

export const getStaticPaths : GetStaticPaths = async () => {
    const categories = getAllCategoryIds();

    return {
        paths: categories,
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

    const postsInCategory = await getSortedPostsDataFromCategory(params.id as string);

    return {
        props: {
            posts: postsInCategory,
        }
    }
}