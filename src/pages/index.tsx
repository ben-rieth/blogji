import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import NavBar from "./../components/molecules/NavBar";
import Hero from "../components/molecules/Hero";
import WIP from "../components/atoms/WIP";
import { getSortedPostsData } from "../utils/posts";
import type { PostData } from "../types/Posts";
import PostCover from "../components/molecules/PostCover";

type HomePageProps = {
  posts: PostData[];
}

const Home: NextPage<HomePageProps> = ({ posts }) => {
  console.log(posts)
  return (
    <>
      <Head>
        <title>Blogji</title>
        <meta name="description" content="BLog posts written by Ben (Benji) Riethmeier" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen dark:bg-slate-800">
        <NavBar />
        <Hero />
        {posts.map((post) => (
          <PostCover key={post.id} post={post}/>
        ))}
      </div>
      
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {

  const allPostsData = getSortedPostsData();

  return {
    props: {
      posts: allPostsData,
    }
  }

}

export default Home;
