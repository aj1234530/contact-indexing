import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
export async function GET(request: Request) {}

export async function POST() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();

  return Response.json(posts);
}
