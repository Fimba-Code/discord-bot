import mongoose from "mongoose"
import Members from "../models/Members"

interface Participant extends mongoose.Document {
  username?: string
  points?: number
}

class MembersHelper {
  constructor() {
    mongoose.connect(
      `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}/${process.env.DB_NAME}`,
      { useNewUrlParser: true }
    )
  }
  public async create(username: string, points: number) {
    try {
      await Members.create({
        username,
        points,
      })

      return true
    } catch (error) {
      return false
    }
  }

  public async addPoints(username: string, points: number) {
    try {
      const members: Participant = await Members.findOne({ username })
      if (!members) return this.create(username, points)
      // @ts-ignore FTM
      members.points += points

      await members.save()
    } catch (error) {
      return false
    }
  }
}

export default new MembersHelper()
