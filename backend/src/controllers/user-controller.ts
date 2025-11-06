import { NextFunction, Request, Response } from "express";
import { getFollowers } from "../Followers";

export class UserController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getFollowers();
      console.log(result);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}
