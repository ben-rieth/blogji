import type { GetStaticProps, NextPage } from "next";
import { getSortedPostsData } from "./../utils/posts";
import type { PostFrontMatter } from "../types/Posts";
import PostGrid from "../components/posts/PostGrid";
import Layout from "../components/layout";
import Top from "../components/structure/Top";
import { postsAtom } from "../store/posts";
import { useAtom } from "jotai";
import { useEffect } from "react";

type HomePageProps = {
  initialPosts: (PostFrontMatter & { id: string })[];
}

const Home: NextPage<HomePageProps> = ({ initialPosts }) => {

  const [posts, setPosts] = useAtom(postsAtom);
  
  useEffect(() => {
    setPosts(initialPosts);
  }, [initialPosts, setPosts])

  return (
    <Layout 
      title="Blogji" 
      description="Home of Benji's Blog. Come explore my latest thoughts in programming, psychology, and more."
    >
        <Top />
        <PostGrid posts={posts} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {

  const allPostsData = await getSortedPostsData();

  return {
    props: {
      initialPosts: allPostsData,
    }
  }

}

export default Home;
