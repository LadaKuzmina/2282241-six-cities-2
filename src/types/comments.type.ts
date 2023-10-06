import {User} from './user.type.js';

export type CommentsType = {
    text: string;
    date: Date;
    rating: 1 | 2 | 3 | 4 | 5;
    author: User;
}