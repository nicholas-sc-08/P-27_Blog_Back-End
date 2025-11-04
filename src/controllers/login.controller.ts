import type { FastifyReply, FastifyRequest } from "fastify";
import type { IUsuario } from "../types/IUsuario.types.js";
import app from "../app.js";
import bcrypt from "bcrypt";
import { buscar_usuario_email } from "../services/usuario.service.js";

export async function validar_login(req: FastifyRequest<{ Body: IUsuario }>, reply: FastifyReply) {

    try {

        const { email, senha } = req.body;

        if(!email){

            return reply.status(404).send("Email não fornecido");
        };
        
        const usuario = await buscar_usuario_email(email);

        if(!usuario){

            return reply.status(404).send("Usuário não encontrado!");
        };

        const senha_correta = await bcrypt.compare(senha, usuario.senha);

        if(!senha_correta){

            return reply.status(401).send("Senha não é válida!");
        };

        const token = app.jwt.sign({ id_usuario: usuario.id_usuario, email: usuario.email, role: usuario.role }, { expiresIn: "1h" });
        return reply.status(200).send({token});

    } catch (erro: any) {

        reply.status(500).send(erro);
    };
};