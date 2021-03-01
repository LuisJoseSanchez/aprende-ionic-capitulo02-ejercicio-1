import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GazpachoIngredientsComponent } from './gazpacho-ingredients.component';

describe('GazpachoIngredientsComponent', () => {
  let component: GazpachoIngredientsComponent;
  let fixture: ComponentFixture<GazpachoIngredientsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GazpachoIngredientsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GazpachoIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
