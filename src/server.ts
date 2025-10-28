import app from "./app.js";
import { configDotenv } from "dotenv";

configDotenv();

const port: string = process.env.PORT as string;

app.listen({port: Number(port)}, (): void => console.log("Servidor rodando com sucesso"));