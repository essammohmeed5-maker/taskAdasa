import { Component } from '@angular/core';
import { photographers } from '../../data/data';
import { SectionLabel } from '../../shared/components/section-label/section-label';

@Component({
  selector: 'app-about',
  imports: [SectionLabel],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  photographers = photographers;
}
