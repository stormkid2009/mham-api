import {Response, NextFunction} from "express";
import {handlePrismaOperation} from "./prisma.helper";
import { errorHandler } from "./error.handler";


jest.mock("./error.handler");

describe("handlePrismaOperation", () => {
  let mockRes: Partial<Response>;
  let mockNext: NextFunction;
  
  beforeEach(() => {
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    mockNext = jest.fn();
  });

  it("should return the result and send a 200 status code by default", async () => {
    const mockOperation = jest.fn().mockResolvedValue("Success");

    await handlePrismaOperation(mockOperation, mockRes as Response, mockNext);

    expect(mockOperation).toHaveBeenCalledTimes(1);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith("Success");
  });

  it("should return the result and send the specified status code", async () => {
    const mockOperation = jest.fn().mockResolvedValue("Success");

    await handlePrismaOperation(mockOperation, mockRes as Response, mockNext, 201);

    expect(mockOperation).toHaveBeenCalledTimes(1);
    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith("Success");
  });

  it("should call errorHandler if an error is thrown", async () => {
    const mockError = new Error("Prisma Error");
    const mockOperation = jest.fn().mockRejectedValue(mockError);

    await handlePrismaOperation(mockOperation, mockRes as Response, mockNext);

    expect(mockOperation).toHaveBeenCalledTimes(1);
    expect(errorHandler).toHaveBeenCalledWith(mockError, mockRes, mockNext);
  });
});