import { Request, Response } from "express";
import Members from "../models/Members";

interface Members {
  username?: string;
  points?: number;
}

class MembersController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const members = await Members.find().sort("-points");

      return res.json({ data: members });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export default new MembersController();
