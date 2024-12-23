import { useParams } from "react-router-dom";
import { usePost } from "@/hooks/usePost";
import { deletePost } from "@/services/post.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Post } from "../../types/postType.tsx";

const PostDetails = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  if (!id) {
    return <h1 className="text-red-500 text-center mt-10">Invalid post ID</h1>;
  }
  const { data: post, error, isLoading } = usePost(id);

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ["post"] });
      const previousPost = queryClient.getQueryData<Post>(["post"]);
      queryClient.setQueryData(["post"], (oldPosts: Post[] | undefined) => {
        if (!oldPosts) return [];
        return oldPosts.filter((post) => post._id !== id);
      });
      return { previousPost };
    },
    onError: (error, variables, context) => {
      if (context?.previousPost) {
        queryClient.setQueryData(["post"], context.previousPost);
      }
      console.error("Error deleting post:", error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["post"] });
    },
  });

  function handleDelete(id: string) {
    console.log(id);
    deletePostMutation.mutateAsync(id);
  }

  if (isLoading)
    return <h1 className="text-blue-500 text-center mt-10">Loading...</h1>;
  if (error)
    return <h1 className="text-red-500 text-center mt-10">{error.message}</h1>;
  if (!post)
    return (
      <h1 className="text-gray-500 text-center mt-10">Sorry, post not found</h1>
    );

  return (
    <div className="max-w-3xl mx-auto p-6 bg-purple-300 shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <button
        onClick={() => handleDelete(post._id)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Remove
      </button>
    </div>
  );
};

export default PostDetails;
