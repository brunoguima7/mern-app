import express, { Request, Response, NextFunction } from "express"
import notesRoutes from "./routes/notes"

const app = express()

app.use(express.json());

app.use("/api/notes", notesRoutes)

app.use((req, res, next) => {
  next(Error("Endpoint not found"))
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error)
  let errorMessage = "An unknown error occurred"
  if (error instanceof Error) errorMessage = error.message
  res.status(500).json({ errorMessage: errorMessage})
});

export default app
