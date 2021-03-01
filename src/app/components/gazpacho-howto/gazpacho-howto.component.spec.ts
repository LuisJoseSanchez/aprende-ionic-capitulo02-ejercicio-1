import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GazpachoHowtoComponent } from './gazpacho-howto.component';

describe('GazpachoHowtoComponent', () => {
  let component: GazpachoHowtoComponent;
  let fixture: ComponentFixture<GazpachoHowtoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GazpachoHowtoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GazpachoHowtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
