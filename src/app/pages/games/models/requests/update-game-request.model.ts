export class UpdateGameRequest {
  id: string;
  name: string;
  description: string;
  dateFrom: number;
  dateUpTo: number;
  maxPlayers?: number;
}