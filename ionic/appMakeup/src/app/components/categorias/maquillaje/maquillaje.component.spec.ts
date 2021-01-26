import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaquillajeComponent } from './maquillaje.component';

describe('MaquillajeComponent', () => {
  let component: MaquillajeComponent;
  let fixture: ComponentFixture<MaquillajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquillajeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaquillajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
