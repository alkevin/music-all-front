import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosMusicienComponent } from './infos-musicien.component';

describe('InfosMusicienComponent', () => {
  let component: InfosMusicienComponent;
  let fixture: ComponentFixture<InfosMusicienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosMusicienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosMusicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
