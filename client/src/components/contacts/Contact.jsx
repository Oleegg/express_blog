/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import "./Contact.css";

export const ContactMap = () => {
  return (
    <div className="contact">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386.11806931689694!2d27.666135341438284!3d53.953897530734515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc949e2cd315d%3A0x57689dda024e5c82!2z0K3QutGB0L_RgNC10YHRgS3RgdGC0LDQvdGG0LjRjyDQtNC70Y8g0YDQtdC80L7QvdGC0LAg0LLQtdC70L7RgdC40L_QtdC00L7Qsg!5e0!3m2!1sru!2sby!4v1698662415536!5m2!1sru!2sby"
        width="600"
        height="500"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export const ContactMiniMap = () => {
  return (
    <div className="contact-mini">
      <div className="address">
        <p>Novaya Borovaya (Kopishche village)</p>
        <p>Leonardo da Vinci St. 2 BikeBox</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386.11806931689694!2d27.666135341438284!3d53.953897530734515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc949e2cd315d%3A0x57689dda024e5c82!2z0K3QutGB0L_RgNC10YHRgS3RgdGC0LDQvdGG0LjRjyDQtNC70Y8g0YDQtdC80L7QvdGC0LAg0LLQtdC70L7RgdC40L_QtdC00L7Qsg!5e0!3m2!1sru!2sby!4v1698662415536!5m2!1sru!2sby"
        width="300"
        height="100"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
