import { type FC } from "react";
import { formatMMMMdoYYYY } from "../../utils/dates";

type PostFooterProps = {
    date: string;
    views: number | undefined;
}

const PostFooter:FC<PostFooterProps> = ({ date, views }) => {
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