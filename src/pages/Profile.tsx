import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, toggleProfile } from "../store/profile/slice";
import { selectName, selectVisible } from "../store/profile/selectors";

export const Profile: FC = () => {
  const dispatch = useDispatch();

  const name = useSelector(selectName);
  const visible = useSelector(selectVisible);
  const [value, setValue] = useState("");

  return (
    <>
      <h2>profile page</h2>
      <p>visible:</p>
      <input type="checkbox" checked={visible} />
      <button className="ButtonSend" onClick={() => dispatch(toggleProfile())}>
        change visible
      </button>
      <p>name: {name}</p>
      <p>Change name:</p>
      <input
        className="UserInput"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="ButtonSend"
        onClick={() => dispatch(changeName(value))}
      >
        change name
      </button>
    </>
  );
};
