export class SearchPeopleRequest {
  public search: string;
  public pageIndex?: number;
  public pageSize?: number;

  constructor(
    search: string,
  ) {
    this.search = search;
  }
}