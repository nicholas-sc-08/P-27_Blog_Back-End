import fp from "fastify-plugin";
import { verificar_token } from "../services/auth.service.js";
import type { FastifyInstance } from "fastify";

export default fp(async (app: FastifyInstance) => {
    
    app.decorate("autenticar", verificar_token)
});