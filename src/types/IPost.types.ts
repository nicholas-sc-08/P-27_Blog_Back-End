export interface IPost {

    id_post: number;
    titulo: string;
    texto: string;
    imagem: string;
    data: Date;
    fk_id_usuario: number;
};

export interface ICreatePost {

    titulo: string;
    texto: string;
    imagem: string;
    data: Date;
    fk_id_usuario: number;
};

export interface IUpdatePost {

    titulo?: string;
    texto?: string;
    imagem?: string;
    data?: Date;
    fk_id_usuario?: number;
};