import { express } from "express";
import { getFeedPosts, getUserPosts, likePosts } from "../controllers/posts.js";
import { veryfyToken } from "../middleware/auth.js";

export const router = express.Router();

//Read
router.get("/", veryfyToken, getFeedPosts);
router.get("/:userId/posts", veryfyToken, getUserPosts);

//Update
router.patch("/:id", veryfyToken, likePosts);
