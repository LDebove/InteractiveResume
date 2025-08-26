import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDescription } from './experience-description';

describe('ExperienceDescription', () => {
  let component: ExperienceDescription;
  let fixture: ComponentFixture<ExperienceDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceDescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
