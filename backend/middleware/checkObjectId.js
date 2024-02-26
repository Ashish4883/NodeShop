import { isValidObjectId } from "mongoose";

function checkObjectId(req, res, next) {
  if (!isValidObjectId(req.params.id)) {
    res.status(400);
    throw new Error(`Invalid Object of: ${req.params.id}`);
  }
  next();
}

export default checkObjectId;
