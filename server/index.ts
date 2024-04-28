import { createServer } from "http";
import express, { Request, Response } from "express";
import next from "next";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { configDotenv } from "dotenv";
configDotenv();

const PORT = process.env.PORT || 5050;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY || ""
);

const runAI = async (prompt: string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  return text;
};

// run();
app
  .prepare()
  .then(() => {
    const server = express();
    const httpServer = createServer(server);
    server.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });
    server.use(express.json()); // JSON 형식의 body 파싱
    server.use(express.urlencoded({ extended: true })); // URL-encoded 형식의 body 파싱

    server.get("*", async (req, res) => {
      res.send("get test");
    });

    server.post("/api/data", async (req, res) => {
      const resText = await runAI(req.body.prompt);
      res.send(resText);
    });

    httpServer.listen(PORT, () => {
      console.log(`> listening on ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
