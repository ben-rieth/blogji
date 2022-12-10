export type PostFrontMatter = {
    title: string;
    date: string;
}

export type PostData = {
    title: string;
    date: string;
    id: string;
}

type PostContent = {
    content: string;
}

export type PostDataWithContent = PostData & PostContent;