import type { ROLE } from "../utils/enum.utils.js";

export interface IUsuario {

    id_usuario: number;
    nome: string;
    email: string;
    senha: string;
    role: ROLE.admin | ROLE.escritor | ROLE.user;
}

export interface ICreateUsuario {

    nome: string;
    email: string;
    senha: string;
    role: ROLE.admin | ROLE.escritor | ROLE.user;
}

export interface IUpdateUsuario {

    nome?: string;
    email?: string;
    senha?: string;
}