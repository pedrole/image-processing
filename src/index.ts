import express from "express";
import routes from "./routes";

const app = express();
const port = 3000;

app.use("/api", routes);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.message);
  res.status(500).send("Internal Server Error");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

export default app;
