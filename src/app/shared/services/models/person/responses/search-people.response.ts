import { BaseResponse } from "../../base-response";
import { IPerson } from "../interfaces/person.interface";

export class SearchPeopleResponse extends BaseResponse {
  public people: Array<IPerson>;
  constructor(people: Array<IPerson>) {
    super();
    this.people = people;
  }
}