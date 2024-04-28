const request = require("supertest");
const app = require("../app");

describe("The route getBars", () => {
  let response;

  beforeAll(async () => {
    response = await request(app).get("/api/bars");
  });

  it("should return a status code of 200 and a list of bars", () => {
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should return bars with their properties", () => {
    const bars = response.body;
    bars.forEach((bar) => {
      expect(bar).toHaveProperty("name");
      expect(bar).toHaveProperty("description");
      expect(bar).toHaveProperty("address");
      expect(bar).toHaveProperty("email");
      expect(bar).toHaveProperty("tel");
    });
  });
});
