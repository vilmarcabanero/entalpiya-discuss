import * as I from '@entropiya/i-discuss';
import mongoose from 'mongoose';
const postSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    likers: {
      type: [String],
      required: true,
      default: [],
    },
    hidden: {
      type: Boolean,
      required: true,
      default: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    updatedAt: {
      type: Date,
      required: true,
    },
    version: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false
  },
);

postSchema.statics.build = (attrs: I.Post) => {
  return new Post(attrs);
};

const Post = mongoose.model<PostDoc, PostModel>('Post', postSchema);

export { Post };

/**
 * An interface that describes the properties that a Post Model has.
 */
interface PostModel extends mongoose.Model<PostDoc> {
  build(attrs: I.Post): PostDoc;
}

/**
 * An interface that describes the properties that a Post Document has.
 */
interface PostDoc extends I.Post, mongoose.Document {
  _id: string;
}
