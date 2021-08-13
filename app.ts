import express, { Request, Response } from "express";

const app = express();
const PORT = 5000 || process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  return res.json("hello");
});

app.listen(PORT, () => console.log("🔥 server running at ", PORT, "🔥"));
