import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const prismaClient = new PrismaClient();
app.get("/", async (req, res) => {
  console.log(process.env.DATABASE_URL);
  const data = await prismaClient.user.findMany();
  console.log(data);
  res.json({
    data,
  });
});

app.post("/", async (req, res) => {
  console.log(process.env.process);
  const data = await prismaClient.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  res.json({
    message: "post endpoint",
  });
});
app.listen(3000);
