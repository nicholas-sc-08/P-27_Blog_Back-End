import z from "zod";
import { ROLE } from "../generated/prisma/enums.js";

export const usuario_schema = z.object({

    id_usuario: z.number().positive().min(1),
    nome: z.string().min(1),
    email: z.email().min(1),
    senha: z.string().min(7),
    role: z.enum(ROLE)

});

export const usuario_update_schema = usuario_schema.partial();