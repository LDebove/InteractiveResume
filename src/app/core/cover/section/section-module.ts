import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section } from './section';
import { SectionTitle } from './section-title/section-title';
import { SectionContent } from './section-content/section-content';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Section,
    SectionTitle,
    SectionContent
  ],
  exports: [
    Section,
    SectionTitle,
    SectionContent
  ],
})
export class SectionModule { }
