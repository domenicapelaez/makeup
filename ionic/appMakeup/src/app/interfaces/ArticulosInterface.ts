export interface IArticulo {
    articulo_id?: number;
    nombre_articulo?: string;
    descripcion?: string;
    categoriaid?: ICategoria;
    marcaid?: IMarca;
    precio?: string;
    logo?:string;
}

export interface IMarca {
    marcaid?: number;
    nombre_marca?: string;
    logo?:string;
    articulos?: IArticulo[]
}

export interface ICategoria {
    categoriaid?: number;
    nombre_categoria?: string;
    logo?:string;
    articulos?: IArticulo[];
}

type Categorias = ICategoria[] | ICategoria;

type Marcas = IMarca[] | IMarca;

export interface MsnApiMarcas {
    status?: string;
    message?: string;
    errors?: string;
    code?: number;
    data?: IMarca[];
//    data?: M;
}

export interface MsnApiCategorias {
    status?: string;
    message?: string;
    errors?: string;
    code?: number;
    data?: ICategoria;
//    data?: M;
}

export interface MsnApiArticulos {
    status?: string;
    message?: string;
    errors?: string;
    code?: number;
    data?: IArticulo[];
}

export interface MsnApiAgregarc {
    status?: string;
    message?: string;
    errors?: string;
    data?: ICategoria;
}
export interface MsnApiAgregarm {
    status?: string;
    message?: string;
    errors?: string;
    data?: IMarca;
}

export interface IFavorito {
    cuentaid?: number;
    articuloid?: number;
}

export interface MsnApiFavoritos{
    status?: string;
    message?: string;
    errors?: string;
    code?: number;
    data?: IArticulo;
}

export interface MsnApiEditara {
    status?: string;
    message?: string;
    errors?: string;
    data?: IArticulo;
}