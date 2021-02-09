export interface IArticulo {
    articulo_id?: number;
    nombre_articulo?: string;
    descripcion?: string;
    categoriaid?: ICategoria;
    marcaid?: IMarca;
    precio?: string;
    imagen?: string;
}
export interface ICategoria {
    categoriaid?: number;
    nombre_categoria?: string;
    articulos?: IArticulo;
}

type CCategorias = ICategoria[] | ICategoria;
export interface MsnApiCategorias {
    status?: string;
    message?: string;
    errors?: string;
    code?: number;
    data?: ICategoria;
//    data?: M;
}

export interface IMarca {
    marcaid?: number;
    nombre_marca?: string;
    articulos?: IArticulo[];
}

type MMarcas = IMarca[] | IMarca;
export interface MsnApiMarcas {
    status?: string;
    message?: string;
    errors?: string;
    code?: number;
    data?: IMarca[];
//    data?: M;
}

export interface MsnApiArticulos {
    status?: string;
    message?: string;
    errors?: string;
    code?: number;
    //data?: IMarca[] | IArticulo[];
    data?: IArticulo[] | IArticulo | IMarca | IMarca[];
}
