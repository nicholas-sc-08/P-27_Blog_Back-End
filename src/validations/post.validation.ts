import z from "zod";

export const post_schema = z.object({

    titulo: z.string(),
    texto: z.string(),
    imagem: z.url(),
    data: z.date(),
    fk_id_usuario: z.int().positive()
});

export const post_update_schema = post_schema.partial();