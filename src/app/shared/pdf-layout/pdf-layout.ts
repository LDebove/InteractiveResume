import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Autofit } from './autofit';
import { Zoomable } from './zoomable';
import { Toolbar } from "./toolbar/toolbar";

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Autofit, Zoomable, Toolbar],
  templateUrl: './pdf-layout.html',
  styleUrl: './pdf-layout.scss'
})
export class PdfLayout {

}
