import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptCardComponent } from './prompt-card.component';

describe('PromptCardComponent', () => {
  let component: PromptCardComponent;
  let fixture: ComponentFixture<PromptCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromptCardComponent]
    });
    fixture = TestBed.createComponent(PromptCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
