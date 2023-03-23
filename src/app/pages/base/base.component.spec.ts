import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Subscription } from "rxjs";
import { AppModule } from "src/app/app.module";
import { SharedModule } from "src/app/shared/shared.module";
import { BaseComponent } from "./base.component";

describe('BaseComponent', () => {
    let component: BaseComponent;
    let fixture: ComponentFixture<BaseComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [SharedModule, AppModule],
        providers: [],
        declarations: [BaseComponent],
      }).compileComponents();
  
      fixture = TestBed.createComponent(BaseComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should add subscription to objectsForDestruction', () => {
        const subscription = new Subscription();
        component.toDestroy(subscription);
        expect(component.objectsForDestruction).toContain(subscription);
    })

    it('should unsubscribe all subscriptions on ngOnDestroy', () => {
        const subscription1 = new Subscription();
        const subscription2 = new Subscription();
        spyOn(subscription1, 'unsubscribe');
        spyOn(subscription2, 'unsubscribe');
        component.objectsForDestruction = [subscription1, subscription2];

        component.ngOnDestroy();
        
        expect(subscription1.unsubscribe).toHaveBeenCalled();
        expect(subscription2.unsubscribe).toHaveBeenCalled();
      });
  });