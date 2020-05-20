import mongoose from "mongoose";

const MembersSchema = new mongoose.Schema(
  {
    username: String,
    points: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Members", MembersSchema);
