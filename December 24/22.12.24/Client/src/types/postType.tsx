export type Post = {
  _id: string;
  title: string;
  content: string;
};

export type CatWithoutId = Omit<Post, "_id">;
