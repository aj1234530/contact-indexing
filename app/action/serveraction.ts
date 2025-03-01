"use server";

import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

const createContacts = async (name: string, phone: number) => {
  const data = await prisma.contacts.create({
    data: {
      name: name,
      phone: phone,
    },
  });
  return { message: "success", data: data };
};

const fetchContacts = async () => {
  const data = await prisma.contacts.findMany();
  return { message: "success", data: data };
};
