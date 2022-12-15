import type { GetStaticProps, NextPage } from "next";
import { getSortedPostsData } from "./../utils/posts";
import type { PostFrontMatter } from "../types/Posts";
import PostGrid from "../components/posts/PostGrid";
import Layout from "../components/layout";
import Top from "../components/structure/Top";

type HomePageProps = {
  posts: (PostFrontMatter & { id: string })[];
}

const Home: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <Layout 
      title="Blogji" 
      description="Home of Benji's Blog. Come explore my latest thoughts in programming, psychology, and more."
    >
        <Top />
        <PostGrid posts={posts} title="Recent Posts"/>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {

  const allPostsData = await getSortedPostsData();

  return {
    props: {
      posts: allPostsData,
    }
  }

}

export default Home;
