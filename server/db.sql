CREATE TABLE person(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  surname VARCHAR(255),
  auth_id INTEGER,
  FOREIGN KEY (auth_id) REFERENCES auth (id)
);
CREATE TABLE post(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content VARCHAR(255),
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES person (id)
);
CREATE TABLE authusers(
  name VARCHAR(255),
  surname VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password text
);
