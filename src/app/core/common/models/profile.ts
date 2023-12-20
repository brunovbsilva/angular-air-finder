import { IProfile } from "../interfaces/profile.interface";

export class Profile implements IProfile {
  constructor(
    public readonly userId: string,
    public readonly personId: string,
    public readonly login: string,
    public name: string,
    public email: string,
    public imageUrl: string
  ) {}

}