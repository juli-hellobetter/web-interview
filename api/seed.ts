import { createIntervention } from "./integrationTests/factories/interventionFactory";

export async function seed(){
  await Promise.all([ 
    createIntervention(),
    createIntervention(),
    createIntervention(),
    createIntervention(), 
    createIntervention()
  ])

  console.log("Database populated!")
}