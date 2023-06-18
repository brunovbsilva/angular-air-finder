import { NgModule } from "@angular/core";
import { GamesComponent } from "./games.component";
import { GameListComponent } from "./game-list/game-list.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
        GamesComponent,
        GameListComponent,
    ],
    imports: [
        SharedModule
    ]
})
export class GamesModule { }