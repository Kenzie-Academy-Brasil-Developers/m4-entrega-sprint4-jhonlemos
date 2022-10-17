import { Request, Response, NextFunction } from "express";

const verifyIsAdm = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const userId = req.user.id;
  const isAdm = req.user.isAdm;

  if (id) {
    if (!isAdm && id !== userId) {
      return res.status(401).json({
        message: "Not able to update another user",
      });
    }
  }

  if (!req.user.isAdm) {
    return res.status(403).json({
      message: "Must be admin",
    });
  }

  return next();
};
export default verifyIsAdm;
