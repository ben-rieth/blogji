import { type FC } from "react";

type HeroProps = {
    main: string;
    sub: string;
}

const Hero:FC<HeroProps> = ({ main, sub }) => {
    return (
        <header className="
            h-96
            flex justify-center items-center flex-col gap-3
            bg-gradient-to-tr from-emerald-400 to-cyan-400
        ">
            <h1 className="text-5xl text-slate-100">{main}</h1>
            <p className="text-lg text-slate-100">{sub}</p>
        </header>
    );
}

export default Hero;