import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConversationComponent } from './list-conversation.component';

describe('ListConversationComponent', () => {
  let component: ListConversationComponent;
  let fixture: ComponentFixture<ListConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConversationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
