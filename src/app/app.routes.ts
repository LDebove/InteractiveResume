import { Routes } from '@angular/router';
import { PdfLayout } from './shared/pdf-layout/pdf-layout';
import { Cover } from './core/cover/cover';
import { Dwarka } from './core/dwarka/dwarka';
import { Oxyl } from './core/oxyl/oxyl';
import { Bioteos } from './core/bioteos/bioteos';

export const routes: Routes = [
  {
    path: "dwarka",
    component: Dwarka
  },
  {
    path: "oxyl",
    component: Oxyl
  },
  {
    path: "bioteos",
    component: Bioteos
  },
  {
    path: "",
    component: PdfLayout,
    children: [
      {
        path: "cover",
        component: Cover,
        title: "Resume - Cover"
      },
      {
        path: "**",
        redirectTo: "/cover"
      },
    ]
  },
  {
    path: "**",
    redirectTo: "/cover"
  }
];
