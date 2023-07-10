import { jwt } from "jsonwebtoken";

export const veryfyToken = async (req, res, next) => {
  try {
    let token = req.header("Autorization");

    if (!token) {
      return res.status(403).send("Acces Denided");
    }
    if (token) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
  } catch (error) {
    res.status(500).json({ error: error.massage });
  }
};
