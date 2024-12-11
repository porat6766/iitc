// import React from "react";
// import styles from "./comments.module.css";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import axios from "axios";
// import getAuthTokenFromCookie from "../../../auth/auth.js";
// import { useSelector } from "react-redux";
// import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

// const deleteCommentApi = async (id) => {
//   const token = getAuthTokenFromCookie();

//   try {
//     const res = await axios.delete(`http://localhost:3000/api/comments/${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     console.log(res);
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Add like to a comment
// const addLikeCommentApi = async (commentId) => {
//   const token = getAuthTokenFromCookie();
//   try {
//     const res = await axios.post(
//       `http://localhost:3000/api/likes/add`,
//       { commentId },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     console.log("Like added:", res);
//     return res.data; // Assuming the response contains updated like count or success status
//   } catch (error) {
//     console.error("Error adding like:", error);
//   }
// };

// // Remove like from a comment
// const removeLikeCommentApi = async (commentId) => {
//   const token = getAuthTokenFromCookie();
//   try {
//     const res = await axios.delete(`http://localhost:3000/api/likes/remove`, {
//       data: { commentId },
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     console.log("Like removed:", res);
//     return res.data; // Assuming the response contains updated like count or success status
//   } catch (error) {
//     console.error("Error removing like:", error);
//   }
// };

// const PostComments = ({
//   comments,
//   newComment,
//   setNewComment,
//   handleAddComment,
//   setAllPosts,
//   selectedPostId,
// }) => {
//   const userGlobal = useSelector((state) => state.user);

//   const deleteComment = (id) => {
//     deleteCommentApi(id);

//     setAllPosts((prev) =>
//       prev.map((post) =>
//         post._id === selectedPostId
//           ? {
//               ...post,
//               comments: post.comments.filter((comment) => comment._id !== id),
//             }
//           : post
//       )
//     );
//   };

//   const addLikeComment = async (commentId) => {
//     const updatedComment = await addLikeCommentApi(commentId);
//     if (updatedComment) {
//       setAllPosts((prev) =>
//         prev.map((post) =>
//           post._id === selectedPostId
//             ? {
//                 ...post,
//                 comments: post.comments.map((comment) =>
//                   comment._id === commentId
//                     ? { ...comment, likes: updatedComment.likes }
//                     : comment
//                 ),
//               }
//             : post
//         )
//       );
//     }
//   };

//   const removeLikeComment = async (commentId) => {
//     const updatedComment = await removeLikeCommentApi(commentId);
//     if (updatedComment) {
//       setAllPosts((prev) =>
//         prev.map((post) =>
//           post._id === selectedPostId
//             ? {
//                 ...post,
//                 comments: post.comments.map((comment) =>
//                   comment._id === commentId
//                     ? { ...comment, likes: updatedComment.likes }
//                     : comment
//                 ),
//               }
//             : post
//         )
//       );
//     }
//   };

//   const handleLikeComment = () => {};

//   return (
//     <div className={styles.commentsSection}>
//       <div className={styles.comments}>
//         <ul>
//           {comments.map((comment, index) => (
//             <li className={styles.liComment} key={index}>
//               <div className="containerUserAndText">
//                 <strong>
//                   user {comment?.userName ? comment.authorId : index}{" "}
//                   {comment.user}:
//                 </strong>
//                 {comment.text}
//               </div>
//               <div className="contanerLike">
//                 <div className="icones">
//                   <span className="bold">LIKES</span>:{5}
//                   <ThumbUpOffAltIcon
//                     onClick={() => handleCommentLike(comment._id)}
//                   />
//                 </div>
//               </div>
//               <div className="containerDelete">
//                 {comment.authorId === userGlobal.user._id && (
//                   <DeleteOutlineIcon
//                     onClick={() => deleteComment(comment._id)}
//                     className={styles.deleteIcon}
//                   />
//                 )}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className={styles.addComment}>
//         <input
//           type="text"
//           placeholder="Add comment..."
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//         />
//         <button onClick={handleAddComment}>Add</button>
//       </div>
//     </div>
//   );
// };

// export default PostComments;

import React, { useState } from "react";
import styles from "./comments.module.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import axios from "axios";
import getAuthTokenFromCookie from "../../../auth/auth.js";
import { useSelector } from "react-redux";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const deleteCommentApi = async (id) => {
  const token = getAuthTokenFromCookie();

  try {
    const res = await axios.delete(`http://localhost:3000/api/comments/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

// Add like to a comment
const addLikeCommentApi = async (commentId) => {
  const token = getAuthTokenFromCookie();
  try {
    const res = await axios.post(
      `http://localhost:3000/api/likes/add`,
      { commentId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Like added:", res);
    return res.data; // Assuming the response contains updated like count or success status
  } catch (error) {
    console.error("Error adding like:", error);
  }
};

// Remove like from a comment
const removeLikeCommentApi = async (commentId) => {
  const token = getAuthTokenFromCookie();
  try {
    const res = await axios.delete(`http://localhost:3000/api/likes/remove`, {
      data: { commentId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Like removed:", res);
    return res.data; // Assuming the response contains updated like count or success status
  } catch (error) {
    console.error("Error removing like:", error);
  }
};

const PostComments = ({
  comments,
  newComment,
  setNewComment,
  handleAddComment,
  setAllPosts,
  selectedPostId,
}) => {
  const userGlobal = useSelector((state) => state.user);

  // State to keep track of liked comments
  const [likedComments, setLikedComments] = useState({});

  const deleteComment = (id) => {
    deleteCommentApi(id);

    setAllPosts((prev) =>
      prev.map((post) =>
        post._id === selectedPostId
          ? {
              ...post,
              comments: post.comments.filter((comment) => comment._id !== id),
            }
          : post
      )
    );
  };

  const handleLikeComment = async (commentId) => {
    const comment = comments.find((comment) => comment._id === commentId);
    console.log(comment);
    console.log(comment.authorId);
    console.log(userGlobal.user._id);

    const userHasLiked = comment.authorId === userGlobal.user._id;

    if (userHasLiked) {
      // Remove like
      const updatedComment = await removeLikeCommentApi(commentId);
      if (updatedComment) {
        setLikedComments((prevState) => ({
          ...prevState,
          [commentId]: false, // Update the like state to false
        }));
        setAllPosts((prev) =>
          prev.map((post) =>
            post._id === selectedPostId
              ? {
                  ...post,
                  comments: post.comments.map((comment) =>
                    comment._id === commentId
                      ? { ...comment, likedBy: updatedComment.likedBy }
                      : comment
                  ),
                }
              : post
          )
        );
      }
    } else {
      // Add like
      const updatedComment = await addLikeCommentApi(commentId);
      if (updatedComment) {
        setLikedComments((prevState) => ({
          ...prevState,
          [commentId]: true, // Update the like state to true
        }));
        setAllPosts((prev) =>
          prev.map((post) =>
            post._id === selectedPostId
              ? {
                  ...post,
                  comments: post.comments.map((comment) =>
                    comment._id === commentId
                      ? { ...comment, likedBy: updatedComment.likedBy }
                      : comment
                  ),
                }
              : post
          )
        );
      }
    }
  };

  return (
    <div className={styles.commentsSection}>
      <div className={styles.comments}>
        <ul>
          {comments.map((comment, index) => (
            <li className={styles.liComment} key={index}>
              <div className="containerUserAndText">
                <strong>
                  user {comment?.userName ? comment.authorId : index}{" "}
                  {comment.user}:
                </strong>
                {comment.text}
              </div>
              <div className="contanerLike">
                <div className="icones">
                  <span className="bold">LIKES</span>:{" "}
                  {comment.likes?.length || 0}
                  <ThumbUpOffAltIcon
                    onClick={() => handleLikeComment(comment._id)}
                    style={{
                      color: likedComments[comment._id] ? "blue" : "gray",
                    }}
                  />
                </div>
              </div>
              <div className="containerDelete">
                {comment.authorId === userGlobal.user._id && (
                  <DeleteOutlineIcon
                    onClick={() => deleteComment(comment._id)}
                    className={styles.deleteIcon}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.addComment}>
        <input
          type="text"
          placeholder="Add comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Add</button>
      </div>
    </div>
  );
};

export default PostComments;
