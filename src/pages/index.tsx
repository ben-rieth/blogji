import type { GetStaticProps, NextPage } from "next";
import Hero from "../components/molecules/Hero";
import WIP from "../components/atoms/WIP";
import { getSortedPostsData } from "./../utils/posts";
import type { PostFrontMatter } from "../types/Posts";
import PostGrid from "../components/organisms/PostGrid";
import Layout from "../components/layout";

type HomePageProps = {
  posts: (PostFrontMatter & { id: string })[];
}

const Home: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <Layout 
      title="Blogji" 
      description="Home of Benji's Blog. Come explore my latest thoughts in programming, psychology, and more."
    >
        <Hero main="Benji's Blog" sub="A collection of my latest thoughts"/>
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
