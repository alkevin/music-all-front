import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPartenaireComponent } from './left-partenaire.component';

describe('LeftPartenaireComponent', () => {
  let component: LeftPartenaireComponent;
  let fixture: ComponentFixture<LeftPartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
