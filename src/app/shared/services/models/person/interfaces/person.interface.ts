import { Gender } from "../enums/gender.enum";
import { IPersonLimited } from "./person-limited.interface";

export interface IPerson extends IPersonLimited {
  phone: string;
  birthday: Date;
  gender: Gender;
  readonly CPF: string;
}