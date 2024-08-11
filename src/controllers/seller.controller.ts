import { Request, Response } from "express";
import prisma from "../db/prisma.client";

export const getAllSellers = async (req: Request, res: Response) => {
  try {
    const sellers = await prisma.seller.findMany();
    res.json(sellers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sellers" });
  }
};

export const registerSeller = async (req: Request, res: Response) => {
  try {
    const { name, email, mobile, address } = req.body;
    const result = await prisma.seller.create({
      data: { name, email, mobile, address },
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to register seller" });
  }
};

export const updateSeller = async (req: Request, res: Response) => {
  try {
    const { id, name, email, mobile, address } = req.body;
    const result = await prisma.seller.update({
      where: { id },
      data: { name, email, mobile, address },
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to update seller" });
  }
};

export const deleteOneSeller = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const result = await prisma.seller.delete({
      where: { id },
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete seller" });
  }
};
