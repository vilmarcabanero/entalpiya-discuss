import * as I from '../interfaces';
import mongoose from 'mongoose';
declare const Post: PostModel;
export { Post };
interface PostModel extends mongoose.Model<PostDoc> {
    build(attrs: I.Post): PostDoc;
}
interface PostDoc extends I.Post, mongoose.Document {
    _id: string;
}
