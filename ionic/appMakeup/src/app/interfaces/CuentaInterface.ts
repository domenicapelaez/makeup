export interface IUsuario {
    userid?: number;
    nombre?: string;
    apellidos?: string;
    telefono?: number;
    ciudad?: string;
    codigoPostal?: string;
    cuentaid?: ICuenta;
    compraid?: ICompra;
}

export interface ICuenta {
    id: number;
    rol: string;
    nombre: string;
    apellidos: string;
    email: string;
    password: string;
}

export interface ICompra {
    compraid: number;
    articuloid: number;
    cantidad: number;
    fecha: number;
    descuento: number;
    importe: string;
    estado: string;
}

export interface ILogin{
    email: string;
    password: string;
}

export interface MsnApiRegister {
    status?: string;
    message?: string;
    errors?: string;
}

export interface MsnApiLogin {
    status?: string;
    message?: string;
    errors?: string;
    token?: IToken;
    user?: ICuenta;
}

export interface IToken {
   access_token: string;
   token_type: string;
   expires_at: string;
}