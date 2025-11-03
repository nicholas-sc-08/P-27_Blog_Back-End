import type { FastifyInstance } from "fastify";
import * as usuarioController from "../controllers/usuario.controller.js";

export async function routes_usuarios(fastify: FastifyInstance): Promise<void>{

    fastify.get("/", usuarioController.get_usuarios);
    fastify.get("/:id", usuarioController.get_usuario);
    fastify.post("/", usuarioController.post_usuario);
    fastify.put("/:id", usuarioController.put_usuario);
    fastify.delete("/:id", usuarioController.delete_usuario);
};