import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryImage } from './story-image';

describe('StoryImage', () => {
  let component: StoryImage;
  let fixture: ComponentFixture<StoryImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
