import type { FastifyReply, FastifyRequest } from "fastify";
import type { IUsuario } from "../types/IUsuario.types.js";
import app from "../app.js";

export async function validar_login(req: FastifyRequest<{ Body: IUsuario }>, reply: FastifyReply) {

    try {

        const usuario = req.body;
        const token = app.jwt.sign(usuario);

        return reply.status(200).send(token);

    } catch (erro: any) {

        reply.status(500).send(erro);
    };
};