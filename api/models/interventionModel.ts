import { model, Schema } from "mongoose";

export interface ILesson {
  _id: string,
  title: string;
  description: string;
};

export interface IIntervention {
  version: number;
  name: string;
  status: Status;
  lessons: ILesson[];
  createdAt: Date;
  updatedAt: Date;
};

export enum Status {
  draft = "draft",
  review = "review",
  published = "published"
}


const interventionSchema = new Schema<IIntervention>(
  {
    version: { type: Number, default: 1.0, required: true },
    name: { type: String, required: true },
    status: { type: String, enum: Object.values(Status), default: Status.draft, required: true },
    lessons: {
      type: [{
        title: { type: String, required: true },
        description: { type: String, required: true },
      }],
      default: [],
    },
},
  { timestamps: true }
);

export const Intervention = model('Intervention', interventionSchema);
