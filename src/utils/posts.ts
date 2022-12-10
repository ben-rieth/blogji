import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { PostDataWithContent } from '../types/Posts';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

const fileNameToId = (fileName: string) : string => {
    return fileName.replace(/\.md$/, '');
}

const idToFileName = (id: string) : string => {
    return `${id}.md`;
}

export const getAllPostIds = () => {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileNameToId(fileName),
            }
        }
    })
};

export const getPostData = async (id: string) : Promise<PostDataWithContent> => {
    const fullPath = path.join(postsDirectory, idToFileName(id));
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHTML = processedContent.toString();

    return {
        id,
        content: contentHTML,
        title: matterResult.data.title,
        date: matterResult.data.date,
    }
};

export const getSortedPostsData = () => {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileNameToId(fileName);

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        return {
            id, 
            title: matterResult.data.title,
            date: matterResult.data.date,
        };
    });

    
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    })
}