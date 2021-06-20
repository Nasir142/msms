import express from "express";
import blogController from "../controllers/blogController.js";
const Router = express.Router();

Router.get("/", blogController.indexController);

export default Router;
