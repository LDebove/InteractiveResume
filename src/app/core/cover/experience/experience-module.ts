import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from './experience';
import { ExperienceCompany } from './experience-company/experience-company';
import { ExperienceTitle } from './experience-title/experience-title';
import { ExperienceLocation } from './experience-location/experience-location';
import { ExperienceDate } from './experience-date/experience-date';
import { ExperienceDescription } from './experience-description/experience-description';
import { ExperienceFooter } from './experience-footer/experience-footer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Experience,
    ExperienceCompany,
    ExperienceTitle,
    ExperienceLocation,
    ExperienceDate,
    ExperienceDescription,
    ExperienceFooter
  ],
  exports: [
    Experience,
    ExperienceCompany,
    ExperienceTitle,
    ExperienceLocation,
    ExperienceDate,
    ExperienceDescription,
    ExperienceFooter
  ]
})
export class ExperienceModule { }
