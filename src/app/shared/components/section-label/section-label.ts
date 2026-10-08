
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-label',
  imports: [],
  templateUrl: './section-label.html',
  styleUrl: './section-label.css'
})
export class SectionLabel {

  @Input() text = '';

}

