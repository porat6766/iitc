import api from "@/lib/api.tsx";
import { Post,  PostWitoutId } from "../types/postType.tsx";

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await api.get("/");
    return response.data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const getPostDetails = async (id: string): Promise<Post> => {
  try {
    const response = await api.get(`/${id}`);
    return response.data.post;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const deletePost = async (id: string): Promise<void> => {
  try {
    await api.delete(`/remove/${id}`);
  } catch (error) {
    console.error(`Error deleting post with id ${id}:`, error);
    throw error;
  }
};

export const updatePost = async (
  id: string,
  updatedPost: Post
): Promise<void> => {
  try {
    await api.patch(`/update/${id}`, updatedPost);
  } catch (error) {
    console.error(`Error updating post with id ${id}:`, error);
    throw error;
  }
};

export const addPost = async (newPost: PostWitoutId): Promise<void> => {
  try {
    await api.post("/add", newPost);
  } catch (error) {
    console.error("Error adding post:", error);
    throw error;
  }
};
