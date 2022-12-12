import Head from "next/head";
import { type FC } from "react";
import NavBar from "./molecules/NavBar";

type LayoutProps = {
    children: JSX.Element[];
    title: string;
}

const Layout:FC<LayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="dark:bg-slate-800 min-h-screen">
                <NavBar />
                {children}
            </main>
        </>
    )
}

export default Layout;