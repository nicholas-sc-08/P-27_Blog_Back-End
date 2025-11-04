import type { ICreateUsuario, IUsuario, IUpdateUsuario } from "../types/IUsuario.types.js";
import prisma from "../config/client.js";

export async function buscar_usuarios(): Promise<IUsuario[] | null> {

    try {

        const usuarios: IUsuario[] | null = await prisma.usuario.findMany();
        return usuarios;
        
    } catch (erro: any) {
      
        console.error(erro);
        throw new Error("Erro ao buscar usuários");
    };
};

export async function buscar_usuario(id: number): Promise<IUsuario | null> {

    try {

        const usuario: IUsuario | null = await prisma.usuario.findUnique({where: { id_usuario: id}});
        return usuario;
        
    } catch (erro: any) {
      
        console.error(erro);
        throw new Error("Erro ao buscar o usuário pelo ID");
    };
};

export async function buscar_usuario_email(email: string): Promise<IUsuario | null>{

    try {

            const usuario: IUsuario | null = await prisma.usuario.findUnique({where: {email: email}});
            return usuario;
        
    } catch (erro: any) {
      
        console.error(erro);
        throw new Error("Erro ao buscar o usuário pelo Email");
    };
};

export async function cadastrar_usuario(data: ICreateUsuario): Promise<IUsuario> {

    try {

        const usuario: IUsuario = await prisma.usuario.create({data: data});
        return usuario;
        
    } catch (erro: any) {
      
        console.error(erro);
        throw new Error("Erro ao cadastrar usuário");
    };
};

export async function atualizar_usuario(id: number, data: IUpdateUsuario): Promise<IUsuario> {

    try {

        const usuario: IUsuario = await prisma.usuario.update({where: {id_usuario: id}, data: data});
        return usuario;
        
    } catch (erro: any) {
      
        console.error(erro);
        throw new Error("Erro ao atualizar usuário");
    };
};

export async function deletar_usuario(id: number): Promise<void> {

    try {

        const usuario: IUsuario = await prisma.usuario.delete({where: {id_usuario: id}});
        
    } catch (erro: any) {
      
        console.error(erro);
        throw new Error("Erro ao deletar usuário");
    };
};