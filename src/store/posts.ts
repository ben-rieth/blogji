import { atom } from 'jotai';
import { type PostFrontMatter } from '../types/Posts';

export const postsAtom = atom<(PostFrontMatter & { id: string })[]>([]);
