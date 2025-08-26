import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceTitle } from './experience-title';

describe('ExperienceTitle', () => {
  let component: ExperienceTitle;
  let fixture: ComponentFixture<ExperienceTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
