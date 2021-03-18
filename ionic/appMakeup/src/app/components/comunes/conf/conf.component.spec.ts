import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfComponent } from './conf.component';

describe('ConfComponent', () => {
  let component: ConfComponent;
  let fixture: ComponentFixture<ConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
