import type { IPost, ICreatePost, IUpdatePost } from "../types/IPost.types.js";
import prisma from "../config/client.js";

export async function buscar_posts(): Promise<IPost[]> {

    try {

        const posts: IPost[] | undefined = await prisma.post.findMany();
        return posts;

    } catch (erro: any) {

        console.error(erro);
        throw new Error("Erro ao buscar postagens no service");
    };
};

export async function buscar_post(id: number): Promise<IPost | null> {

    try {

        const post: IPost | null = await prisma.post.findUnique({ where: { id_post: id } });
        return post;

    } catch (erro: any) {

        console.error(erro);
        throw new Error("Erro ao buscar o post no service");
    };
};

export async function cadastrar_post(data: ICreatePost): Promise<IPost>{

    try {

        const post: IPost = await prisma.post.create({data: data});
        return post;
        
    } catch (erro: any) {
      
        console.error(erro);
        throw new Error("Erro ao cadastrar o post no service");
    };
};

export async function atualizar_post(id: number, data: IUpdatePost): Promise<IPost>{

    try {

        const post: IPost = await prisma.post.update({where: {id_post: id}, data: data});
        return post;
        
    } catch (erro: any) {
      
        console.error(erro);
        throw new Error("Erro ao atualizar o post");
    };
};