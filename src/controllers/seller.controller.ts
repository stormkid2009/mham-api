import { Request, Response, NextFunction } from "express";
import prisma from "../db/prisma.client";
import { handlePrismaOperation } from "../middleware/prisma.helper";

/**
 * Retrieves all sellers from the database and sends them as a JSON response.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {Promise<void>} A promise that resolves when the sellers are fetched and sent as a response.
 */
export const getAllSellers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await handlePrismaOperation(() => prisma.seller.findMany(), res, next);
};

/**
 * Retrieves a seller from the database by their ID and sends them as a JSON response.
 *
 * @param {Request} req - The request object containing the seller's ID.
 * @param {Response} res - The response object to send the result back to the client.
 * @return {Promise<void>} A promise that resolves when the seller is fetched and sent as a response.
 */
export const getSellerById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await handlePrismaOperation(async () => {
    const { id } = req.params;
    const seller = await prisma.seller.findUnique({ where: { id } });
    if (!seller) {
      res.status(404).json({ error: "Seller not found" });
      return null; // Prevent further processing
    }
    return seller;
  }, res, next);
};

/**
 * Registers a new seller in the database.
 *
 * @param {Request} req - The request object containing the seller's details.
 * @param {Response} res - The response object to send the result back to the client.
 * @return {Promise<void>} A promise that resolves when the seller is registered.
 */
export const registerSeller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await handlePrismaOperation(() => prisma.seller.create({ data: req.body }), res, next);
};

/**
 * Updates a seller in the database.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {Promise<void>} A promise that resolves when the seller is updated.
 */
export const updateSeller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await handlePrismaOperation(() => prisma.seller.update({ where: { id: req.params.id }, data: req.body }), res, next);
};

/**
 * Deletes a seller from the database.
 *
 * @param {Request} req - The request object containing the seller's ID.
 * @param {Response} res - The response object to send the result back to the client.
 * @return {Promise<void>} A promise that resolves when the seller is deleted.
 */
export const deleteOneSeller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await handlePrismaOperation(() => prisma.seller.delete({ where: { id: req.params.id } }), res, next);
};
