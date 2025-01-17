import mongoose, { Document } from "mongoose";

export interface IComponent extends Document {
  page: mongoose.Schema.Types.ObjectId;
  type: string;
  content: mongoose.Schema.Types.Mixed;
  position: { x: number; y: number };
  createdAt: Date;
  style?: object;
}
