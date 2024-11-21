import { useState } from "react";
import "./App.css";
import { Avatar } from "@mui/material";

//mui import

function App() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      imageUrl: "",
    },
    {
      id: 2,
      name: "Jane Smith",
      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Michael Brown",
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Emily Davis",
      imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Chris Johnson",
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];

  const getInitial = (fullName) => {
    const array = fullName.split(" ");
    const newWord = array.map((word) => {
      return word[0];
    });
    console.log(newWord);
    return newWord.join("");
  };
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />;

  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Avatar src={user.imageUrl}>{getInitial(user.name)}</Avatar>
            <p>{user.name}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
