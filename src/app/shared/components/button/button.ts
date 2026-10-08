import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [RouterLink],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {

  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() routerLink = '';

}
