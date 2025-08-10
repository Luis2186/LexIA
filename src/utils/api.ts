import { categorias, herramientas } from '../data/mockData';

export async function fetchCategorias() {
    return categorias;
}

export async function fetchHerramientas() {
    return herramientas;
}
