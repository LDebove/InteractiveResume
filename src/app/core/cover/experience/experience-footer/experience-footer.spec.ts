import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceFooter } from './experience-footer';

describe('ExperienceFooter', () => {
  let component: ExperienceFooter;
  let fixture: ComponentFixture<ExperienceFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
