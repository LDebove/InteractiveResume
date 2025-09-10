import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryDate } from './story-date';

describe('StoryDate', () => {
  let component: StoryDate;
  let fixture: ComponentFixture<StoryDate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryDate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryDate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
