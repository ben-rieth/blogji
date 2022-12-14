import Image from "next/image";
import SearchBox from "../atoms/SearchBox";

const Top = () => {
    return (
        <header className="flex justify-between items-center gap-5 flex-col md:flex-row-reverse md:justify-center md:gap-32 mx-5 mb-20 mt-10">
            
            <div>
                <p className="text-3xl font-mono text-rose-500">
                    <Image 
                        src="/me.jpg"
                        alt="Me, smiling"
                        width={300}
                        height={300}
                        className="rounded-full"
                    />
                </p>
            </div>
            
            <div className="flex flex-col gap-6">
                <p className="text-3xl dark:text-slate-100 :text-slate-800 font-handwriting">
                    A collection of my latest thoughts on different subjects
                </p>
                <SearchBox />
            </div>
        </header>
    )
}

export default Top;