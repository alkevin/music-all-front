import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAmisComponent } from './list-amis.component';

describe('ListAmisComponent', () => {
  let component: ListAmisComponent;
  let fixture: ComponentFixture<ListAmisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAmisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
