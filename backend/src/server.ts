import express, { json } from "express";
import cors from "cors";
import { router } from "./router/user-router";

const app = express();

app.use(cors());

// app.use(cors({
//   origin: "http://localhost:5173", // endereço do seu front-end
//   methods: ["GET", "POST"],
//   allowedHeaders: ["Content-Type", "Authorization"],
// }));

app.use(json());
app.use(router);

app.listen(3000, () => {
  console.log("Server rodando na porta 3000 com CORS habilitado!");
});
