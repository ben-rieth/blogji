import Head from "next/head";
import { type FC } from "react";
import NavBar from "./navigation/NavBar";
import Footer from "./structure/Footer";

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
            <div className="dark:bg-slate-800 min-h-screen flex flex-col">
                <NavBar />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </div>
            
        </>
    )
}

export default Layout;