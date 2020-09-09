import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoInfoComponent } from './perso-info.component';

describe('PersoInfoComponent', () => {
  let component: PersoInfoComponent;
  let fixture: ComponentFixture<PersoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
