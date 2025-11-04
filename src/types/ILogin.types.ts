import type { ROLE } from "../generated/prisma/enums.js";

export interface ILogin {

    email: string;
    senha: string;
    role: ROLE;
}