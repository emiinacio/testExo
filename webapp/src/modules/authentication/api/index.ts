
/**
 * Generated by ExoCoding 0.0.1
 */

export interface TaskHdrDTO {
    tp: number;
    nr: number;
    name: string;
    importance: any;
}

/**
 * To preform the register
 */
export interface UserRegisterDTO {
// username
    username: string;
// password
    password: string;
// name
    name: string;
// email
    email: string;
}

/**
 * To preform the login
 */
export interface UserLoginDTO {
// email
    email: string;
// password
    password: string;
}


export * from "./TaskHdrController";
export * from "./AuthController";
