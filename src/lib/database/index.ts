import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

neonConfig.fetchConnectionCache = true;


if (!process.env.DATABASE_URL) {
    throw new Error("Cannot connect to database")
}

const sql = neon(process.env.DATABASE_URL!);

export const database = drizzle(sql)