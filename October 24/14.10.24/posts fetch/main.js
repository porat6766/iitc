const elulPosts = document.querySelector(".ul-posts");
const elonepostDiv = document.querySelector(".one-post-div");
const elform = document.querySelector(".form");

//show reload
const elReload = document.querySelector(".load");

let info;

const getAllPosts = async () => {
  try {
    const response = await axios.get(
      `https://api-playground-ten.vercel.app/posts`
    );
    info = response.data;

    showInfo(info);
  } catch (error) {
    alert("Error server");

    console.error(
      "Error fetching posts:",
      error.response?.data || error.message
    );
  }
};

getAllPosts();

const showInfo = (data) => {
  data.forEach((element) => {
    const liTittle = document.createElement("li");
    const liContent = document.createElement("li");
    const space = document.createElement("hr");
    liTittle.style.color = "red";
    space.style.color = "red";
    liTittle.textContent = element.title;
    liContent.textContent = element.content;
    elulPosts.appendChild(liTittle);
    elulPosts.appendChild(liContent);
    elulPosts.appendChild(space);
  });
};

elform.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const elFormo = new FormData(elform);
  const representformObject = Object.fromEntries(elFormo);
  showOneInfo(representformObject.number);
});

function showOneInfo(num) {
  const one = info.find((po) => po._id === num);
  if (one) {
    const elli1 = document.createElement("li");
    const elli2 = document.createElement("li");
    elli1.textContent = one.title;
    elli2.textContent = one.content;
    elonepostDiv.appendChild(elli1);
    elonepostDiv.appendChild(elli2);
  } else {
    console.log("Post not found.");
  }
}

///// creat post
const createPost = async () => {
  try {
    const response = await axios.post(
      "https://api-playground-ten.vercel.app/posts",
      {
        title: "New Post Title",
        content: "This is the content of the new post.",
      }
    );
    console.log("Post created:", response.data);
  } catch (error) {
    alert("Error server");

    console.error(
      "Error creating post:",
      error.response?.data || error.message
    );
  }
};

createPost();

///update
const updatePost = async (postId) => {
  try {
    const response = await axios.patch(
      `https://api-playground-ten.vercel.app/posts/${postId}`,
      {
        title: "Updated Post Title",
        content: "Updated post content.",
      }
    );
    console.log("Post updated:", response.data);
  } catch (error) {
    alert("Error server");

    console.error(
      "Error updating post:",
      error.response?.data || error.message
    );
  }
};

updatePost("670d2124a4b9dad89c6ac4f9");

//delete
const elform2 = document.querySelector(".form2");
elform2.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const elForm = new FormData(elform2);
  const representformObject = Object.fromEntries(elForm);
  deletePost(representformObject.text);
});

const deletePost = async (postId) => {
  try {
    elReload.style.display = "block";
    const response = await axios.delete(
      `https://api-playground-ten.vercel.app/posts/${postId}`
    );
    console.log("Post deleted:", response.data);
  } catch (error) {
    alert("Error server");

    console.error(
      "Error deleting post:",
      error.response?.data || error.message
    );
  } finally {
    elReload.style.display = "none";
  }
};

///
