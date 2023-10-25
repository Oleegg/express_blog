require("dotenv").config();

const path = require("path");
const express = require("express");
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.router");
const authRouter = require("./routes/auth/auth.router");

const PORT = process.env.PORT || 3200;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "static", "index.html"));
});

app.use("/api", userRouter);
app.use("/api", postRouter);
app.use("/api", authRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
