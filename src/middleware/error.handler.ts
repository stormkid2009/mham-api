// src/middleware/error.handler.ts

import { Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";

export const errorHandler = (error: any, res: Response, next: NextFunction) => {
  if (error instanceof Prisma.PrismaClientValidationError) {
    res.status(400).json({ error: "Validation error" });
  } else if (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === "P2025"
  ) {
    res.status(404).json({ error: "Not found" });
  } else {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({ error: "Internal server error" });
  }
};
