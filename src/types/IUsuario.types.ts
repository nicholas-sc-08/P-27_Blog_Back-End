import type { ROLE } from "../utils/enum.utils.js";

export interface IUsuario {

    id_usuario: number;
    nome: string;
    email: string;
    senha: string;
    role: ROLE;
}

export interface ICreateUsuario {

    nome: string;
    email: string;
    senha: string;
    role: ROLE;
}

export interface IUpdateUsuario {

    nome?: string;
    email?: string;
    senha?: string;
}

export interface GetParamId {

    id_usuario: number;
}