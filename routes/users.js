import { express } from "express";
import { veryfyToken } from "../middleware/auth.js";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";

const router = express.Router();

//Read
router.get("/:id", veryfyToken, getUser);
router.get("/:id/friends", veryfyToken, getUserFriends);

//Update
router.patch("/:id/:friendId", veryfyToken, addRemoveFriend);

export default router;
