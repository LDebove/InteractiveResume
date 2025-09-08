import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDate } from './experience-date';

describe('ExperienceDate', () => {
  let component: ExperienceDate;
  let fixture: ComponentFixture<ExperienceDate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceDate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceDate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
