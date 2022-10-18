import { useState } from "react";
import { AUTHOR } from "../constants";

export const Form = ({ addMessage }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addMessage({
      author: AUTHOR.user,
      value,
    });
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="ENTER SOMETHING"
        class="UserInput"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button class="ButtonSend" disabled={!value}>
        SEND
      </button>
    </form>
  );
};
