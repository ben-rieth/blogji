import axios, { AxiosError } from "axios";
import { useEffect, useState, type FC } from "react";
import { formatMMMMdoYYYY } from "../../utils/dates";

type PostFooterProps = {
    date: string;
    title: string;
}

const PostFooter:FC<PostFooterProps> = ({ date, title }) => {
    
    const [views, setViews] = useState<number | undefined>(undefined);

    useEffect(() => {

        (async () => {
            try {
                const response = await axios.post(
                    `/api/posts/views`, 
                    { 
                        title: title
                    }
                ).then(res => res.data);

                setViews(response?.views);

                } catch (err) {
                    if (err instanceof AxiosError) {
                        console.log(err.request);
                    }
                    console.log(err);
                }
        })();

    }, [title]);
    
    return (
        <div 
            suppressHydrationWarning
            className="flex items-center justify-between w-full dark:text-slate-400 text-slate-600 mx-auto max-w-screen-lg px-10 text-lg mb-5"
        >
            <p>Published On: {formatMMMMdoYYYY(date)}</p>
            <p>Views: {views}</p>
        </div>
    );
}

export default PostFooter;