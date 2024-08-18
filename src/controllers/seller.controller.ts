import { Request, Response, NextFunction } from "express";
import prisma from "../db/prisma.client";
import { errorHandler } from "../middleware/errorHandler";

/**
 * Retrieves all sellers from the database and sends them as a JSON response.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {Promise<void>} A promise that resolves when the sellers are fetched and sent as a response.
 */
export const getAllSellers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const sellers = await prisma.seller.findMany();
    res.json(sellers);
  } catch (error) {
    errorHandler(error, res, next);  // Use the custom error handler
  }
   
  
};

/**
 * Retrieves a seller from the database by their ID and sends them as a JSON response.
 *
 * @param {Request} req - The request object containing the seller's ID.
 * @param {Response} res - The response object to send the result back to the client.
 * @return {Promise<void>} A promise that resolves when the seller is fetched and sent as a response.
 */
export const getSellerById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const seller = await prisma.seller.findUnique({
      where: { id },
    });
    if(!seller) {
       res.status(404).json({ error: "Seller not found" });
       return;
    }
    res.status(200).json(seller);
  } catch (error) {
    errorHandler(error, res, next);  // Use the custom error handler
  }
};

/**
 * Registers a new seller in the database.
 *
 * @param {Request} req - The request object containing the seller's details.
 * @param {Response} res - The response object to send the result back to the client.
 * @return {Promise<void>} A promise that resolves when the seller is registered.
 */
export const registerSeller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name, email, mobile, address } = req.body;
    const result = await prisma.seller.create({
      data: { name, email, mobile, address },
    });
    res.status(201).json(result);
  } catch (error) {
    errorHandler(error, res, next);  // Use the custom error handler
  }
};

/**
 * Updates a seller in the database.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {Promise<void>} A promise that resolves when the seller is updated.
 */
export const updateSeller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {id} = req.params;
  try {
    const {  name, email, mobile, address } = req.body;
    const result = await prisma.seller.update({
      where: { id },
      data: { name, email, mobile, address },
    });
    res.status(200).json(result);
  } catch (error) {
    errorHandler(error, res, next);  // Use the custom error handler
  }
};

/**
 * Deletes a seller from the database.
 *
 * @param {Request} req - The request object containing the seller's ID.
 * @param {Response} res - The response object to send the result back to the client.
 * @return {Promise<void>} A promise that resolves when the seller is deleted.
 */
export const deleteOneSeller = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {id} = req.params;
    const result = await prisma.seller.delete({
      where: { id },
    });
    res.status(200).json(result);
  } catch (error) {
    errorHandler(error, res, next);  // Use the custom error handler
  }
};
