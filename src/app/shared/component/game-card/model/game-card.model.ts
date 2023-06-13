export class GameCardModel {
    id: string = '';
    name: string = '';
    date: Date = new Date();
    imageUrl?: string = '';
    loading?: boolean = false;
}