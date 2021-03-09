import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregaraComponent } from './agregara.component';

describe('AgregaraComponent', () => {
  let component: AgregaraComponent;
  let fixture: ComponentFixture<AgregaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregaraComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
