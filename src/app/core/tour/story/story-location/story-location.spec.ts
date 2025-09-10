import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryLocation } from './story-location';

describe('StoryLocation', () => {
  let component: StoryLocation;
  let fixture: ComponentFixture<StoryLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryLocation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryLocation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
