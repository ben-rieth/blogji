export type PostFrontMatter = {
    title: string;
    abstract: string;
    publishedOn: string;
    updatedOn: string;
    category: string[];
    isPublished: boolean;
    coverImage: string;
    coverImageAlt: string;
    readingTime: number | undefined;
}