import type { FastifyInstance } from "fastify";
import { validar_login } from "../controllers/login.controller.js";

export async function routes_login(fastify: FastifyInstance): Promise<void>{

    fastify.post("/login", validar_login);
};