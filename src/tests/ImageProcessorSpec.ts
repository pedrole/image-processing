import fs from "fs";
import path from "path";
import processImage from "../utilities/processImage";
import { CustomRequest } from "../types/customRequest";
import { Response } from "express";

const cacheDir = path.resolve(__dirname, "../../assets/thumb");

describe("Image Processing API", () => {
  beforeAll(() => {
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true });
    }
  });

  let mockReq: Partial<CustomRequest>;
  let mockRes: Partial<Response>;
  let mockNext: jasmine.Spy;

  beforeEach(() => {
    mockReq = {
      query: {},
    };
    mockRes = {
      status: jasmine.createSpy("status").and.returnValue({
        json: jasmine.createSpy("json"),
      }),
      json: jasmine.createSpy("json"),
    };
    mockNext = jasmine.createSpy("next");
  });

  it("should process image", async () => {
    mockReq.query = {
      filename: "fjord",
      width: "200",
      height: "200",
    };
    await processImage(mockReq as CustomRequest, mockRes as Response, mockNext);
    expect(mockReq.processedImage).toBeDefined();
  });
});
