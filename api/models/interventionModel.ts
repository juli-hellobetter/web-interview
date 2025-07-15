import { model, Schema } from "mongoose";

export interface ILesson {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  progress: number; //0-100
}

export interface IIntervention {
  version: number;
  name: string;
  status: Status;
  lessons: ILesson[];
  createdAt: Date;
  updatedAt: Date;
}

export enum Status {
  draft = "draft",
  review = "review",
  published = "published",
}

const interventionSchema = new Schema<IIntervention>(
  {
    version: { type: Number, default: 1.0, required: true },
    name: { type: String, required: true },
    status: {
      type: String,
      enum: Object.values(Status),
      default: Status.draft,
      required: true,
    },
    lessons: {
      type: [
        {
          title: { type: String, required: true },
          description: { type: String, required: true },
          completed: { type: Boolean, default: false },
          progress: { type: Number, default: 0 },
        },
      ],
      default: [],
    },
  },
  { timestamps: true },
);

export const Intervention = model("Intervention", interventionSchema);
