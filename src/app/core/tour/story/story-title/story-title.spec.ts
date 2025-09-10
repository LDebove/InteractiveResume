import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryTitle } from './story-title';

describe('StoryTitle', () => {
  let component: StoryTitle;
  let fixture: ComponentFixture<StoryTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
