import { getMDXComponent } from "mdx-bundler/client";
import { type FC, useMemo, type DetailedHTMLProps, type HTMLAttributes } from "react";

const ULComponent = (props: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>) => (
    <ul className="list-disc ml-10" {...props} />
);

type PostArticleProps = {
    articleCode: string
}

const PostArticle:FC<PostArticleProps> = ({ articleCode }) => {
    const Component = useMemo(() => getMDXComponent(articleCode), [articleCode])
    
    return (
        <article 
            className="text-black dark:text-white px-7 sm:px-10 mx-auto my-10 text-base max-w-screen-md"
        >
            <Component components={{ 
                ul: ULComponent,
            }}/>
        </article>
    )
}

export default PostArticle;