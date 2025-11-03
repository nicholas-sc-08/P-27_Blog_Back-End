import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes_usuarios } from "./routes/usuario.router.js";

const app = Fastify({logger: true});

app.register(cors, {origin: "*"});
app.register(routes_usuarios, {prefix: "/usuarios"});

export default app;