export const GITHUB_LINK = "https://github.com/ben-rieth";
export const LINKEDIN_LINK = "https://www.linkedin.com/in/benjamin-riethmeier-4b8949204/";

export const BLOG_HOME = "/";
export const LATEST_POSTS = "/";

export const postLinkFromId = (id: string) => {
    return `${BLOG_HOME}posts/${id}`;
};

export const categoryLinkFromId = (id: string) => {
    return `${BLOG_HOME}category/${id}`;
};



