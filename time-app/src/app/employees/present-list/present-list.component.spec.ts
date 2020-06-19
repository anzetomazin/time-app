import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentListComponent } from './present-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('PresentListComponent', () => {
  let component: PresentListComponent;
  let fixture: ComponentFixture<PresentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentListComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
