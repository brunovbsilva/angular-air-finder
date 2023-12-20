import { IPersonLimited } from "../interfaces/person-limited.interface";

export class PersonLimited implements IPersonLimited {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string,
    public imageUrl: string,
  ) {}
}