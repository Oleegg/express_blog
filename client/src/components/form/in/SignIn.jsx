import React, { useState } from "react";
import { Input } from "../../input/Input";
import { Button } from "../../button/Button";
import "./SignIn.css";

export const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      </div>
      <Button name="Submit" type="submit" />
    </form>
  );
};
