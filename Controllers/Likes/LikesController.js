import { findAllLikes } from "../../DAO/LikesDao.js";
const findAllLikesMethod = async (req, res) => {
  const likes = await findAllLikes();
  console.log(likes);
  res.json(likes);
};
const LikesController = (app) => {
  app.get("/api/likes", findAllLikesMethod);
};
export default LikesController;
