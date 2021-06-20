import express from "express";
import blogRouter from "./routes/blogRouter.js";
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(blogRouter);
app.listen(3000, () => "listing on port 30000");
