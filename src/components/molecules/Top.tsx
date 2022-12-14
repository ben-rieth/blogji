import SearchBox from "../atoms/SearchBox";

const Top = () => {
    return (
        <header className="flex justify-between items-center flex-col gap-3 mx-5 mb-20 mt-10">
            <div className="flex flex-col gap-6">
                <h1 className="text-3xl text-slate-100 font-handwriting">
                    A collection of my latest thoughts on different subjects
                </h1>
                <SearchBox />
            </div>
        </header>
    )
}

export default Top;