import Head from "next/head";
import { type FC } from "react";
import NavBar from "./navigation/NavBar";

type LayoutProps = {
    children: JSX.Element[];
    title: string;
    description: string;
}

const Layout:FC<LayoutProps> = ({ children, title, description }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={description} />
            </Head>
            <main className="dark:bg-slate-800 min-h-screen">
                <NavBar />
                {children}
            </main>
        </>
    )
}

export default Layout;