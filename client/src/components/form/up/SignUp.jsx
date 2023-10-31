import React, { useState } from "react";
import { Input } from "../../input/Input";
import "./SignUp.css";
import { Button } from "../../button/Button";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="form" onSubmit={(e) => submit(e)}>
      <div className="form__content">
        <Input
          id="name"
          name="name"
          handler={changeHandler}
          value={formData.name}
        />
        <Input
          id="email"
          name="email"
          type="email"
          handler={changeHandler}
          value={formData.email}
        />
        <Input
          id="password"
          name="password"
          type="password"
          handler={changeHandler}
          value={formData.password}
        />
        <Input
          id="confirm"
          text="Confirm password"
          type="password"
          name="confirm"
          autoComplete="password"
          handler={changeHandler}
          value={formData.confirm}
        />
      </div>
      <Button name="Submit" type="submit" />
    </form>
  );
};
