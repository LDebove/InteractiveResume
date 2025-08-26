import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCompany } from './experience-company';

describe('ExperienceCompany', () => {
  let component: ExperienceCompany;
  let fixture: ComponentFixture<ExperienceCompany>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceCompany]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceCompany);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
