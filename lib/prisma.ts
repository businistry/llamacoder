import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool } from "@neondatabase/serverless";
import { cache } from "react";
import { getPrisma as getMockPrisma } from "./prisma.mock";

export const getPrisma = cache(() => {
  if (process.env.DATABASE_URL) {
    const neon = new Pool({ connectionString: process.env.DATABASE_URL });
    const adapter = new PrismaNeon(neon);
    return new PrismaClient({ adapter });
  } else {
    return getMockPrisma();
  }
});
