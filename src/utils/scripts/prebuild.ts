import type { PostWithId } from "../../types/Posts";

import path from 'path';
import fs from 'fs';
import { mainDirectory, getSortedPostsData } from '../posts.js';
import { prisma } from '../db.js';

const createSearchIndex = (posts: PostWithId[]) => {
    const jsonString = JSON.stringify(posts);

    const searchFile = path.join(mainDirectory, 'search.json');

    try {
        fs.writeFileSync(searchFile, jsonString)
    } catch (err) {
        console.log("Cannot write search file");
    }
}

const updatePrisma = async (posts: PostWithId[]) => {

    const postTitles = posts.map((post) => (
        { title: post.title }
    ));

    const payload = await prisma.post.createMany({
        data: postTitles,
        skipDuplicates: true,
    });

    return payload.count;
}

const allPosts = await getSortedPostsData();

console.log("Prebuild start");
createSearchIndex(allPosts);
const count = await updatePrisma(allPosts);
console.log("Prebuild end. Posts added to db: ", count);

