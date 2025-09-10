import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryProjectNeed } from './story-project-need';

describe('StoryProjectNeed', () => {
  let component: StoryProjectNeed;
  let fixture: ComponentFixture<StoryProjectNeed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryProjectNeed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryProjectNeed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
