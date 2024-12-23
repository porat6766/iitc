import { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.css";
import axios from "axios";
import Select from "./select.tsx";

const socket = io("http://localhost:3000");

export type Room = "General" | "Sports" | "Movies" | "";

interface Message {
  room: Room;
  message: string;
  username: string;
}

const saveMessageAPI = async (data: Message) => {
  console.log(data);
  try {
    const res = await axios.post("http://localhost:3000/add", data);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

const fetchDataAPI = async (room: Room) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/messages/${room}`);
    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

function App() {
  const [username, setUsername] = useState("");
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");
  const [room, setRoom] = useState<Room>("");
  const [isTyping, setIsTyping] = useState("");

  useEffect(() => {
    if (room) {
      fetchDataAPI(room).then((data) => {
        setMessages(data.data);
      });
    }

    socket.on("receive_message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      // messageReceivedSound.play();
    });

    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    socket.on("send_message", (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
    });

    return () => {
      socket.off("receive_message");
      socket.off("message");
      socket.off("send_message");
    };
  }, [room, isChatStarted]);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout | null = null;

    socket.on("user_write", (username) => {
      console.log(username);
      setIsTyping(username);

      if (typingTimeout) clearTimeout(typingTimeout);

      typingTimeout = setTimeout(() => {
        setIsTyping("");
      }, 1000);
    });

    return () => {
      socket.off("user_write");
      if (typingTimeout) clearTimeout(typingTimeout);
    };
  }, []);

  const handleStartChat = () => {
    if (username.trim() && room) {
      setIsChatStarted(true);
      socket.emit("join_chat", username, room);
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = { username: username, message: message, room: room };
      saveMessageAPI(newMessage);
      setMessages([...messages, newMessage]);
      socket.emit("send_message", newMessage);
      setMessage("");
    }
  };

  const handleSetMessage = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(ev.target.value);
    socket.emit("user_write", username, room);
  };

  return (
    <div className="container">
      {!room ? (
        <Select setRoom={setRoom} room={room} />
      ) : !isChatStarted ? (
        <div className="box">
          <h2>Welcome to the Chat</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />
          <button onClick={handleStartChat} className="button">
            Start Chat
          </button>
        </div>
      ) : (
        <div className="box">
          <h2>Chat - Welcome, {username}!</h2>
          <div className="chat-box">
            {messages.map((msg, index) => (
              <div key={index} className="message">
                <span className="message-user">{msg.username}: </span>
                {msg.message}
              </div>
            ))}
          </div>
          {isTyping && <div>{`${isTyping} is typing...`}</div>}
          <div className="message-form">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(ev) => handleSetMessage(ev)}
              className="input"
            />
            <button onClick={handleSendMessage} className="button">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
