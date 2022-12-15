export const BLOG_HOME = "/";
export const LATEST_POSTS = "/";

export const postLinkFromId = (id: string) => {
    return `${BLOG_HOME}posts/${id}`;
};

export const categoryLinkFromId = (id: string) => {
    return `${BLOG_HOME}category/${id}`;
};



