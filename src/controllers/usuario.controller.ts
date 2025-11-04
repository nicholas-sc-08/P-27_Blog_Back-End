import type { IUsuario, ICreateUsuario, IUpdateUsuario, GetParamId } from "../types/IUsuario.types.js";
import { usuario_schema, usuario_update_schema } from "../validations/usuario.validation.js";
import type { FastifyRequest, FastifyReply } from "fastify";
import bcrypt from "bcrypt";
import * as ServicesUsuario from "../services/usuario.service.js";

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
    };
};

export async function post_usuario(req: FastifyRequest<{Body: ICreateUsuario}>, reply: FastifyReply) {

    try {

        const data = req.body;
        const validar_usuario = usuario_schema.parse(data);
        console.log(validar_usuario);
        

        if(validar_usuario){

            const criptografar_senha = await bcrypt.hash(data.senha, 10);
            const usuario = {...data, senha: criptografar_senha};
            const resposta = await ServicesUsuario.cadastrar_usuario(usuario);
            reply.status(201).send(resposta);
        };

    } catch (erro: any) {

        reply.status(500).send(erro);
    };
};

export async function put_usuario(req: FastifyRequest<{Params: GetParamId, Body: IUpdateUsuario}>, reply: FastifyReply) {

    try{

        const { id_usuario } = req.params;
        const data = req.body;
        const validar_usuario = usuario_update_schema.parse(data);

        if(validar_usuario){

            const usuario: IUsuario = await ServicesUsuario.atualizar_usuario(id_usuario, data);
            return usuario;

        } else {

            reply.status(401).send("Usuário não está válido para atualizar!");
        };

    } catch(erro: any){

        reply.status(500).send(erro);
    };
};

export async function delete_usuario(req: FastifyRequest<{Params: GetParamId}>, reply: FastifyReply){

    try {

        const { id_usuario } = req.params;
        await ServicesUsuario.deletar_usuario(id_usuario);
        
    } catch (erro: any) {
      
        reply.status(500).send(erro);
    };
};