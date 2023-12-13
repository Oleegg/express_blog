import React from "react";
import { ContactMap } from "../../components/contacts/Contact";
import phoneImg from "../../ui/icons/svg/phone.svg";
import { CONTACTS } from "./constants";
import "./Contacts.css";

export const Contacts = () => {
  return (
    <div className="content contacts">
      <div className="contacts__text">
        <h2>Contacts</h2>
        <p>{CONTACTS.address}</p>
        {CONTACTS.phones.map((phone, i) => {
          const href = `tel: ${phone}`;
          return (
            <a key={i} className="contacts__phone" href={href}>
              <img src={phoneImg} alt="phone"></img> {phone}
            </a>
          );
        })}
        <div className="operating-mode">
          <h4>operating mode:</h4>
          <p>weekdays:{CONTACTS.operating_mode.weekdays}</p>
          <p>weekend:{CONTACTS.operating_mode.weekend}</p>
        </div>
      </div>
      <ContactMap />
    </div>
  );
};
