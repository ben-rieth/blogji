import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

export const getPostData = (id: string) => {
    const fullPath = path.join(postsDirectory, idToFileName(id));
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    return {
        id,
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