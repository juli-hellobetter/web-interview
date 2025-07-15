import { Intervention } from "../models/interventionModel";

export async function findById(id: string) {
  const intervention = await Intervention.findOne({ _id: id }).lean();
  return intervention;
}
