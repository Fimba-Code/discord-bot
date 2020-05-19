import { Request, Response } from "express";
import Participant from "../models/Participant";

interface Participant {
  username?: string;
  points?: number;
}

class AuthController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const participant = await Participant.find().sort("-points");

      return res.json({ message: participant });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { username }: Participant = req.body;

      const participant = await Participant.create({
        username,
        points: 0,
      });

      return res.status(201).json({ message: "User created", participant });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  public async addPoints(req: Request, res: Response): Promise<Response> {
    try {
      const { username, points }: Participant = req.body;

      const participant = await Participant.findOne({ username });

      participant.points += points;

      await participant.save();

      return res.status(201).json({ message: "Point Added", participant });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export default new AuthController();
