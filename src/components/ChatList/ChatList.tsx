import { ListItem } from "@mui/material";
import React, { FC, useState } from "react";
import { customAlphabet } from "nanoid";
import { Chat } from "./../../types";
import { NavLink } from "react-router-dom";
import { blue } from "@mui/material/colors";

const nanoid = customAlphabet("1234567890", 10);

interface ChatListProps {
  chats: Chat[];
  onAddChat: (chat: Chat) => void;
  onDeleteChat: (chatId: string) => void;
}

export const ChatList: FC<ChatListProps> = ({
  chats,
  onAddChat,
  onDeleteChat,
}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      onAddChat({
        id: nanoid(),
        name: value,
      });
      setValue("");
    }
  };

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <ListItem key={chat.id}>
            <NavLink
              className="ButtomChat"
              to={`/chats/${chat.id}`}
              // style={({ isActive }) => ({
              //   color: isActive ? "white" : "black",
              //   width: "250px",
              // })}
            >
              {chat.name}
            </NavLink>
            <button
              className="ButtomClose"
              onClick={() => onDeleteChat(chat.id)}
            >
              ❎
            </button>
          </ListItem>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          className="UserInput"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="ButtonSend">Create chat</button>
      </form>
    </>
  );
};
