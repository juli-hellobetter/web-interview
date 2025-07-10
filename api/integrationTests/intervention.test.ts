import request from "supertest";
import { expect } from "chai"
import { buildServer } from "../buildServer";
import { Express } from "express"
import { cleanDb, closeDbConnection } from "../config/database";
import mongoose from "mongoose";
import { createIntervention } from "./factories/interventionFactory";

describe("GET /intervention/:id", () => {
  let app: Express

  before(async () => {
   app = await buildServer()
  })

  after(async () => {
    await closeDbConnection()
  })

  afterEach(async () => {
    await cleanDb()
  })

  describe("when intervention exists", () => {
    it("should return 200 status and intervention data", async () => {
      const intervention = await createIntervention()

      const res = await request(app).get(`/v1/intervention/${intervention._id.toString()}`);

      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal({
        __v: 0,
        _id: intervention._id.toString(),
        version: intervention.version,
        name: intervention.name,
        status: intervention.status,
        lessons: intervention.lessons.map(lesson => ({
          _id: lesson._id.toString(),
          description: lesson.description,
          title: lesson.title
        })),
        createdAt: intervention.createdAt.toLocaleDateString("en-GB"),
        updatedAt:  intervention.createdAt.toLocaleDateString("en-GB")
      })
    });
  })

  describe("when intervention does not exist", () => {
    it("should return 404 status", async () => {
      const res = await request(app).get(`/v1/intervention/${new mongoose.Types.ObjectId()}`);

      expect(res.status).to.equal(404);
    })
  })
});