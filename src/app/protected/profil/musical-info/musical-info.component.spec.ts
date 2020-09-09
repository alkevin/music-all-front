import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalInfoComponent } from './musical-info.component';

describe('MusicalInfoComponent', () => {
  let component: MusicalInfoComponent;
  let fixture: ComponentFixture<MusicalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
