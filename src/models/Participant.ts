import mongoose from "mongoose";

const ParticipantSchema = new mongoose.Schema(
  {
    username: String,
    points: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Participant", ParticipantSchema);
