import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceLocation } from './experience-location';

describe('ExperienceLocation', () => {
  let component: ExperienceLocation;
  let fixture: ComponentFixture<ExperienceLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceLocation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceLocation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
