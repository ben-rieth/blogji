import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import NavBar from "./../components/molecules/NavBar";
import Hero from "../components/molecules/Hero";
import WIP from "../components/atoms/WIP";
import { getSortedPostsData } from "./../utils/posts";
import PostCover from "./../components/molecules/PostCover";
import type { PostFrontMatter } from "../types/Posts";

type HomePageProps = {
  posts: (PostFrontMatter & { id: string })[];
}

const Home: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blogji</title>
        <meta name="description" content="BLog posts written by Ben (Benji) Riethmeier" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="dark:bg-slate-800">
        <NavBar />
        <Hero />
        {posts.map((post) => (
          <PostCover key={post.id} post={post}/>
        ))}
        <WIP />
      </div>
      
    </>
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
