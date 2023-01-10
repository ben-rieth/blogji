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
                <meta name="description" content={description} />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest"/>
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