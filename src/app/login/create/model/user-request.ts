export class UserRequest {
    name: string = '';
    email: string = '';
    birthday: Date = new Date();
    cpf: string = '';
    gender: Gender = 3;
    login: string = '';
    password: string = '';
    phone: string = '';
}

export enum Gender {
    Male = 1,
    Female = 2,
    Unknow = 3
}