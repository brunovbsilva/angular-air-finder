import { Gender } from "../enums/gender.enum";
import { IPerson } from "../interfaces/person.interface";

export class Person implements IPerson {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string,
    public phone: string,
    public imageUrl: string,
    public birthday: Date,
    public gender: Gender,
    public readonly CPF: string,
  ) {}
}