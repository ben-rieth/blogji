import { getMDXComponent } from "mdx-bundler/client";
import { type FC, useMemo } from "react";

type PostArticleProps = {
    articleCode: string
}

const PostArticle:FC<PostArticleProps> = ({ articleCode }) => {
    const Component = useMemo(() => getMDXComponent(articleCode), [articleCode])
    
    return (
        <article className="text-black dark:text-white px-10 mx-auto mt-10 text-lg max-w-screen-lg">
            <Component components={{ 
                ul: (props) => <ul className="list-disc ml-10" {...props} />
            }}/>
        </article>
    )
}

export default PostArticle;