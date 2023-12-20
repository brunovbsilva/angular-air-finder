import { BaseResponse } from "../../base-response";
import { IPersonLimited } from "../interfaces/person-limited.interface";

export class SearchPeopleResponse extends BaseResponse {
  public people: Array<IPersonLimited>;
  constructor(people: Array<IPersonLimited>) {
    super();
    this.people = people;
  }
}