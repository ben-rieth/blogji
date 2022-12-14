import { BsSearch } from 'react-icons/bs';

const SearchBox = () => {
    return (
        <div className="relative flex gap-2 p-4 items-center outline outline-2 outline-neutral-500
        hover:outline-rose-500 focus:outline-rose-500 rounded-2xl bg-transparent hover:bg-slate-700">
            <BsSearch className="w-6 h-6 fill-neutral-900 dark:fill-neutral-200"/>
            <input
                className="
                    bg-transparent 
                    w-full text-xl
                    text-neutral-900 
                    dark:text-neutral-200 
                    placeholder:text-neutral-400 
                    "
                placeholder="Search posts"
            />
        </div>
        
    );
};

export default SearchBox;