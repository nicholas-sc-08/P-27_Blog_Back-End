import Fastify from "fastify";
import fastifyJwt from "@fastify/jwt";
import cors from "@fastify/cors";
import { routes_usuarios } from "./routes/usuario.router.js";
import authPlugin from "./plugins/auth.plugin.js";
import { routes_login } from "./routes/login.routes.js";

const app = Fastify({logger: true});

app.register(fastifyJwt, { secret: process.env.JWT_SECRET || "minha_chave_secreta"});
app.register(authPlugin);
app.register(cors, {origin: "*"});
app.register(routes_login);
app.register(routes_usuarios, {prefix: "/usuarios"});

export default app;