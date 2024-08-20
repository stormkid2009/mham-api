import { Response, NextFunction } from "express";
import { errorHandler } from "./error.handler";

// Helper function to handle Prisma operations and errors
export const handlePrismaOperation = async<T> (
  operation: () => Promise<T>,
  res: Response,
  next: NextFunction,
  successStatusCode: number = 200
) => {
  try {
    const result = await operation();
    res.status(successStatusCode).json(result);
  } catch (error) {
    errorHandler(error, res, next);
  }
};
