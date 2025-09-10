import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorySubtitle } from './story-subtitle';

describe('StorySubtitle', () => {
  let component: StorySubtitle;
  let fixture: ComponentFixture<StorySubtitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorySubtitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorySubtitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
