import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryProjectOutcome } from './story-project-outcome';

describe('StoryProjectOutcome', () => {
  let component: StoryProjectOutcome;
  let fixture: ComponentFixture<StoryProjectOutcome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryProjectOutcome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryProjectOutcome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
