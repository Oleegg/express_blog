import React from "react";
import "./Input.css";

export const Input = ({
  id,
  type = "text",
  name,
  placeholder,
  text = name,
  autoComplete = name,
  value,
  handler,
}) => {
  return (
    <>
      <label htmlFor={id} className="label">
        <span className="label__text">{text}</span>
        <input
          value={value}
          type={type}
          id={id}
          name={name}
          autoComplete={autoComplete}
          placeholder={placeholder}
          onChange={handler}
        />
      </label>
    </>
  );
};
