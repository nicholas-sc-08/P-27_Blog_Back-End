import type { IUsuario, ICreateUsuario, IUpdateUsuario, GetParamId } from "../types/IUsuario.types.js";
import { usuario_schema, usuario_update_schema } from "../validations/usuario.validation.js";
import type { FastifyRequest, FastifyReply } from "fastify";
import bcrypt from "bcrypt";
import * as ServicesUsuario from "../services/usuario.services.js";

export async function get_usuarios(req: FastifyRequest, reply: FastifyReply) {

    try {

        const usuarios: IUsuario[] | null = await ServicesUsuario.buscar_usuarios();

        if (usuarios) {

            reply.status(200).send(usuarios);
        } else {

            reply.status(404).send("Erro no controller ao buscar os usuários");
        };

    } catch (erro: any) {

        reply.status(500).send(erro);
        throw new Error("Erro ao buscar os usuários");
    };
};

export async function get_usuario(req: FastifyRequest<{ Params: GetParamId }>, reply: FastifyReply) {

    try {

        const { id_usuario } = req.params;
        const usuario: IUsuario | null = await ServicesUsuario.buscar_usuario(id_usuario);

        if (usuario) {

            reply.status(200).send(usuario);
        } else {

            reply.status(404).send("Erro no controller ao buscar os usuário");
        };

    } catch (erro: any) {

        reply.status(500).send(erro);
        throw new Error("Erro no controller ao buscar o usuário pelo ID");
    };
};

export async function post_usuario(req: FastifyRequest, reply: FastifyReply) {

    try {

        const data = req.body;
        const validar_usuario = usuario_schema.parse(data);

        if(validar_usuario){

            const criptografar_senha = bcrypt.hash(data.senha, 10);
            const usuario = {...data, senha: criptografar_senha};
            const resposta = await ServicesUsuario.cadastrar_usuario(usuario);
        }

    } catch (erro: any) {

        reply.status(500).send(erro);
        throw new Error("Erro no controller ao cadastrar o usuário");
    };
};