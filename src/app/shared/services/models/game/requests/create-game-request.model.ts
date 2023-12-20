export class CreateGameRequest {
  name: string;
  description: string;
  dateFrom: number;
  dateUpTo: number;
  maxPlayers?: number;
  idBattleground: string;
}