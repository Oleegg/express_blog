import React from "react";
import { Contact } from "../../components/contacts/Contact";
import phone from "../../ui/icons/svg/phone.svg";
import "./Contacts.css";

export const Contacts = () => {
  return (
    <div className="content contacts">
      <div className="contacts__text">
        <h2>Contacts</h2>
        <p>New Borovaya (Kopishe) Leonardo da Vinci 2 BikeBox</p>
        <a className="contacts__phone" href="tel: +375 29 389 98 11">
          <img src={phone} alt="phone"></img>+375 29 389 98 11
        </a>

        <a className="contacts__phone" href="tel: +375 29 389 98 11">
          <img src={phone} alt="phone"></img>+375 29 389 98 11
        </a>
      </div>
      <Contact />
    </div>
  );
};
