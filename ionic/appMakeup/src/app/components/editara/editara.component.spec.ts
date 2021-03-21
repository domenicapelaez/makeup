import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditaraComponent } from './editara.component';

describe('EditaraComponent', () => {
  let component: EditaraComponent;
  let fixture: ComponentFixture<EditaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaraComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
