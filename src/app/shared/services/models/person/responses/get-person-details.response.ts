import { BaseResponse } from "../../base-response";
import { IPersonLimited } from "../interfaces/person-limited.interface";

export class GetPersonDetailsResponse extends BaseResponse {
  public person: IPersonLimited;
  constructor(person: IPersonLimited) {
    super();
    this.person = person;
  }
}