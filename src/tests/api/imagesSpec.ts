import supertest from "supertest";
import app from "../../index";
import fs from "fs";
import path from "path";
const request = supertest(app);
const cacheDir = path.resolve(__dirname, "../../assets/thumb");

// test images api
describe("images api", () => {
  beforeAll(() => {
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true });
    }
  });

  it("should return 200", async () => {
    const response = await request.get("/api/images?filename=encenadaport&width=200&height=200");
    expect(response.status).toBe(200);
  });
});
