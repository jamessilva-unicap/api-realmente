import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@prisma/client";

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: Number(process.env.DATABASE_PORT ?? 3306),
  connectionLimit: Number(process.env.DATABASE_CONNECTION_LIMIT ?? 5),
  connectTimeout: Number(process.env.DATABASE_CONNECT_TIMEOUT_MS ?? 10000),
});
const prisma = new PrismaClient({ adapter });

export default prisma;
