import mongoose, { Document } from "mongoose";

export interface ISite extends Document {
  _id: string;
  owner: mongoose.Schema.Types.ObjectId;
  name: string;
  domain?: string;
  pages: mongoose.Schema.Types.ObjectId[];
  createdAt: Date;
  theme: string;
}
