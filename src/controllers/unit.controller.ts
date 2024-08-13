// Import the necessary modules
import { Request, Response } from "express";
import prisma from "../db/prisma.client";

/**
 * Retrieves all units from the database and sends them as a JSON response.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {Promise<void>} A promise that resolves when the units are fetched and sent as a response.
 */
export const getAllUnits = async (req: Request, res: Response): Promise<void> => {
    try {
        // Use Prisma to fetch all units from the database
        const units = await prisma.unit.findMany();

        // Send the units as a JSON response
        res.status(200).json(units);
    } catch (error) {
        // If an error occurs, send a JSON response with an error message
        res.status(500).json({ error: "Failed to fetch units" });
    }
};

/**
 * Registers a new unit.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {Promise<void>} A promise that resolves when the unit is registered.
 */
export const registerUnit = async (req: Request, res: Response): Promise<void> => {
  try {
    const { location, area, sold, sellerId } = req.body;
    const result = await prisma.unit.create({
      data: { location, area, sold, sellerId },
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to register unit" });
  }
};

/**
 * Updates a unit in the database.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {Promise<void>} A promise that resolves when the unit is updated.
 */
export const updateUnit = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const { location, area, sold, sellerId } = req.body;
    const result = await prisma.unit.update({
      where: { id },
      data: { location, area, sold, sellerId },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to update unit" });
  }
};

/**
 * Deletes a unit from the database.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {Promise<void>} A promise that resolves when the unit is deleted.
 */
export const deleteOneUnit = async (req: Request, res: Response): Promise<void> => {
  
  try {
    const { id } = req.params;
    const result = await prisma.unit.delete({
      where: { id },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete unit" });
  }
};