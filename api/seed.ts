import { createIntervention } from "./integrationTests/factories/interventionFactory";

export async function seed() {
  await Promise.all([
    createIntervention({ _id: "686fb4a4a6b483fd8b2f85a7" }),
    createIntervention(),
    createIntervention(),
    createIntervention(),
    createIntervention(),
  ]);

  console.log("Database populated!");
}
