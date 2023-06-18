export class ListGamesRequest {
    pageIndex: number = 0;
    itemsPerPage: number = 36;
    fromDate?: number = undefined;
    upToDate?: number = undefined;
}