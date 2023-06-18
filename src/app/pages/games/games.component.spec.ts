import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesComponent } from './games.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PlayedGamesComponentSpec } from 'src/app/core/mock/pages/played-games.component.spec';
import { GameListComponentSpec } from 'src/app/core/mock/pages/game-list.component.spec';
import { ApplyedGamesComponentSpec } from 'src/app/core/mock/pages/applyed-games.component.spec';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import TranslateServiceMock from 'src/app/core/mock/translate.service.mock';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GamesComponent,
        PlayedGamesComponentSpec,
        GameListComponentSpec,
        ApplyedGamesComponentSpec
      ],
      imports: [
        MatTabsModule,
        BrowserAnimationsModule,
        TranslateModule
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
