import fs from 'fs';
import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import type { PostFrontMatter } from '../types/Posts';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'posts');

const fileNameToId = (fileName: string) : string => {
    return fileName.replace(/\.mdx$/, '');
}

const idToFileName = (id: string) : string => {
    return `${id}.mdx`;
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

    const { code, frontmatter, matter } = await bundleMDX<PostFrontMatter>({
        source
    });

    frontmatter.readingTime = Math.round(readingTime(matter.content).minutes);

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

        const { frontmatter, matter } = await bundleMDX<PostFrontMatter>({ 
            source,
        });

        frontmatter.readingTime = Math.round(readingTime(matter.content).minutes);

        return {
            id,
            ...frontmatter
        }
    }));

    const published = allPostsData.filter((post) => post.isPublished);

    
    return published.sort((a, b) => {
        if (a.publishedOn < b.publishedOn) {
            return 1;
        } else {
            return -1;
        }
    })
}