import { atom } from 'jotai';
import { type PostWithId } from '../types/Posts';

export const postsAtom = atom<PostWithId[]>([]);
