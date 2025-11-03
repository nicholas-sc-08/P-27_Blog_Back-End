import type { FastifyRequest, FastifyReply } from "fastify";

export async function verificar_token(req: FastifyRequest, reply: FastifyReply){

    try {

        await req.jwtVerify();
        
    } catch (erro: any) {
      
        reply.status(401).send(erro);
    };
};