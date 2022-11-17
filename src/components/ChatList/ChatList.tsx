import { ListItem } from "@mui/material";
import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../../store/profile/messages/actions";
import { selectChats } from "../../store/profile/messages/selectors";

export const ChatList: FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const chats = useSelector(
    selectChats,
    (prev, next) => prev.length === next.length
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      dispatch(addChat(value));
      setValue("");
    }
  };

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <ListItem key={chat.id}>
            <NavLink className="ButtomChat" to={`/chats/${chat.name}`}>
              {chat.name}
            </NavLink>
            <button
              className="ButtomClose"
              onClick={() => dispatch(deleteChat(chat.name))}
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
