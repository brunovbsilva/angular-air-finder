export class User {
    login: string = '';
    roll: Roll = 2;
    person: Person = new Person();
}

export class Person {
    name: string = '';
    email: string = '';
    birthday: Date = new Date();
    cpf: string = '';
    gender: Gender = 3;
}

export enum Roll {
    Administrator = 1,
    Default = 2
}

export enum Gender {
    Male = 1,
    Female = 2,
    Unknow = 3
}