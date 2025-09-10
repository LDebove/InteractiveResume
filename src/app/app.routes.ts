import { Routes } from '@angular/router';
import { PdfLayout } from './shared/pdf-layout/pdf-layout';
import { Cover } from './core/cover/cover';
import { Tour } from './core/tour/tour';

export const routes: Routes = [
  {
    path: "tour",
    component: Tour
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
