import { Request, Response } from "express";
import prisma from "../db/prisma.client";

/**
 * Retrieves all sellers from the database and sends them as a JSON response.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {Promise<void>} A promise that resolves when the sellers are fetched and sent as a response.
 */
export const getAllSellers = async (req: Request, res: Response): Promise<void> => {
  try {
    const sellers = await prisma.seller.findMany();
    res.json(sellers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sellers" });
  }
};

/**
 * Registers a new seller in the database.
 *
 * @param {Request} req - The request object containing the seller's details.
 * @param {Response} res - The response object to send the result back to the client.
 * @return {Promise<void>} A promise that resolves when the seller is registered.
 */
export const registerSeller = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, mobile, address } = req.body;
    const result = await prisma.seller.create({
      data: { name, email, mobile, address },
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to register seller" });
  }
};

/**
 * Updates a seller in the database.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {Promise<void>} A promise that resolves when the seller is updated.
 */
export const updateSeller = async (req: Request, res: Response): Promise<void> => {
  const {id} = req.params;
  try {
    const {  name, email, mobile, address } = req.body;
    const result = await prisma.seller.update({
      where: { id },
      data: { name, email, mobile, address },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to update seller" });
  }
};

/**
 * Deletes a seller from the database.
 *
 * @param {Request} req - The request object containing the seller's ID.
 * @param {Response} res - The response object to send the result back to the client.
 * @return {Promise<void>} A promise that resolves when the seller is deleted.
 */
export const deleteOneSeller = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const result = await prisma.seller.delete({
      where: { id },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete seller" });
  }
};
