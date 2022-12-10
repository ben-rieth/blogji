import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import type { PostFrontMatter } from '../types/Posts';

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

export const getPostDataMDX = async (id: string) => {
    const fullPath = path.join(postsDirectory, idToFileName(id));
    const source = fs.readFileSync(fullPath, 'utf-8');

    const { code, frontmatter } = await bundleMDX<PostFrontMatter>({ source });

    return {
        id,
        frontmatter,
        code,
    }
}

export const getSortedPostsData = async () => {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = await Promise.all(fileNames.map(async (fileName) => {
        const id = fileNameToId(fileName);

        const fullPath = path.join(postsDirectory, fileName);
        const source = fs.readFileSync(fullPath, 'utf8');

        const { frontmatter } = await bundleMDX<PostFrontMatter>({ source })

        return {
            id,
            ...frontmatter
        }
    }));

    
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    })
}