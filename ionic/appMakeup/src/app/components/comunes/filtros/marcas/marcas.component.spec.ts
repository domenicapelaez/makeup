import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarcasComponent } from './marcas.component';

describe('MarcasComponent', () => {
  let component: MarcasComponent;
  let fixture: ComponentFixture<MarcasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
