export type Categoria = {
    key: string;
    nombre: string;
    emoji: string;
    descripcion: string;
    color: string;
    cantidad: number;
    destacadas: string[];
    herramientas: Herramienta[];
};

export type Herramienta = {
    nombre: string;
    categoria: string;
    descripcion: string;
    logo: string;
    tags: string[];
};
