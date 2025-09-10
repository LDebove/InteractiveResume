import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCarousel } from './story-carousel';

describe('StoryCarousel', () => {
  let component: StoryCarousel;
  let fixture: ComponentFixture<StoryCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
