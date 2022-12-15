import { type FC } from "react";

type CategoryHeaderProps = {
    name: string;
    numPosts: number;
}

const CategoryHeader:FC<CategoryHeaderProps> = ({ name, numPosts }) => {
    return (
        <header className="flex justify-between mx-10 my-5 items-center">
            <h2 className="dark:text-neutral-100 text-neutral-900 text-4xl font-semibold font-handwriting">
                {name}
            </h2>
            <p className="dark:text-neutral-100 text-neutral-900 font-handwriting text-2xl">
                {numPosts} Articles
            </p>
        </header>
    )
}

export default CategoryHeader;