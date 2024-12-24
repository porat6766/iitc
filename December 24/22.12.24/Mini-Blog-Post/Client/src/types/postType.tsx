export type Post = {
  _id: string;
  title: string;
  content: string;
};

export type PostWitoutId = Omit<Post, "_id">;
