import axios from 'axios';
import { type FormEvent, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import useDebounce from '../../hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';
import { type PostWithId } from '../../types/Posts';
import { useAtom } from 'jotai';
import { postsAtom } from '../../store/posts';

const SearchBox = () => {

    const [inputValue, setInputValue] = useState<string>("");
    const debouncedInput = useDebounce(inputValue, 150);

    const [posts, setPosts] = useAtom(postsAtom);

    useQuery<PostWithId[]>({
        queryKey: ["search-results", debouncedInput],
        queryFn: () => axios.get(
            `/api/posts/search?query=${debouncedInput}`
        ).then((res) => res.data),
        onSettled(data) {
            if (data) setPosts(data);
        },
    });

    return (
        <div className="relative flex gap-2 py-3 px-4 items-center outline outline-2 outline-neutral-500
        hover:outline-rose-500 focus:outline-rose-500 rounded-2xl bg-transparent 
        hover:bg-slate-50 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
            <BsSearch className="w-6 h-6 fill-neutral-900 dark:fill-neutral-200"/>
            <input
                className="
                    bg-transparent 
                    w-full text-lg sm:text-xl
                    text-neutral-900 
                    dark:text-neutral-200 
                    placeholder:text-neutral-400 
                    focus-visible:outline-none
                    "
                placeholder="Search posts"
                value={inputValue}
                onChange={(event: FormEvent<HTMLInputElement>) => 
                    setInputValue(event.currentTarget.value) 
                }
            />
            <p className="text-neutral-900 dark:text-neutral-200 text-2xl font-handwriting">
                {posts.length}
            </p>
        </div>
        
    );
};

export default SearchBox;