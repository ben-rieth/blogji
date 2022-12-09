import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { createClient } from 'contentful';

import { env } from './../env/server.mjs';
import type { TypePost } from "../types/ContentfulPost";
import NavBar from "./../components/molecules/NavBar";

type HomePageProps = {
  posts: TypePost[];
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
      <main className="">
        <NavBar />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {

  const client = createClient({
    space: env.CONTENTFUL_SPACE_ID,
    accessToken: env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries({
    content_type: 'post'
  });

  return {
    props: {
      posts: response.items
    }
  }

}

export default Home;
