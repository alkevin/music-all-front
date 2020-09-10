import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProfilComponent } from './header-profil.component';

describe('HeaderProfilComponent', () => {
  let component: HeaderProfilComponent;
  let fixture: ComponentFixture<HeaderProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
