import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPartenaireComponent } from './right-partenaire.component';

describe('RightPartenaireComponent', () => {
  let component: RightPartenaireComponent;
  let fixture: ComponentFixture<RightPartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightPartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightPartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
