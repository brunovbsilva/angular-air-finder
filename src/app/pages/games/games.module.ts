import { NgModule } from "@angular/core";
import { GamesComponent } from "./games.component";
import { GameListComponent } from "./game-list/game-list.component";
import { SharedModule } from "src/app/shared/shared.module";
import { GameCardComponent } from "./game-list/game-card/game-card.component";
import { CreateBattlegroundComponent } from "./game-list/game-card/forms/create-battleground/create-battleground.component";
import { GameCardDialogComponent } from "./game-list/game-card/game-card-dialog/game-card-dialog.component";
import { CreateGameComponent } from "./game-list/game-card/forms/create-game/create-game.component";
import { CreateGameDialogComponent } from "./game-list/game-card/create-game-dialog/create-game-dialog.component";
import { UpdateGameDialogComponent } from "./game-list/game-card/update-game-dialog/update-game-dialog.component";
import { SelectBattlegroundComponent } from "./game-list/game-card/create-game-dialog/select-battleground/select-battleground.component";
import { FilterBattlegroundListPipe } from "./game-list/game-card/create-game-dialog/pipe/filter-battleground-list.pipe";
import { AddressPipe } from "./game-list/game-card/create-game-dialog/pipe/address.pipe";

@NgModule({
    declarations: [
        GamesComponent,
        GameListComponent,
        GameCardComponent,
        GameCardDialogComponent,
        CreateBattlegroundComponent,
        CreateGameComponent,
        CreateGameDialogComponent,
        UpdateGameDialogComponent,
        SelectBattlegroundComponent,
        FilterBattlegroundListPipe,
        AddressPipe,
    ],
    imports: [
        SharedModule
    ]
})
export class GamesModule { }