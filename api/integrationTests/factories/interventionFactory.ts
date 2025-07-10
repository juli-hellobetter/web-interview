import { IIntervention, Intervention, Status } from "../../models/interventionModel"
import { faker } from '@faker-js/faker';
import { randomInt } from "./utils";

function _getRandomsStatus() {
    const values = Object.keys(Status);
    const enumKey = values[randomInt(values.length)];
    return Status[enumKey];
}

function _generateRandomLessons(): IIntervention["lessons"] {
  const lessonTotal = randomInt(5)
  return  [...Array(lessonTotal)].map(() => ({
    title: faker.lorem.slug(3),
    description: faker.lorem.text()
  }))
}

export async function createIntervention(attributes?: IIntervention){
  const intervention = new Intervention({
      version: faker.number.int({min: 1, max: 10 }),
      name: faker.lorem.slug(3),
      status: _getRandomsStatus(),
      lessons: _generateRandomLessons(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      ...attributes
  })
  await intervention.save()
  return intervention
}