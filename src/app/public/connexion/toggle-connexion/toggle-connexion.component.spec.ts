import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleConnexionComponent } from './toggle-connexion.component';

describe('ToggleConnexionComponent', () => {
  let component: ToggleConnexionComponent;
  let fixture: ComponentFixture<ToggleConnexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleConnexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
