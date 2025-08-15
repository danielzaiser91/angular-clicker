import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive, UrlTree } from '@angular/router';

export type AcceptedBackgroundColors = 'orange' | 'grey' | 'yellow' | 'red';

@Component({
  selector: 'app-nav-button',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-button.component.html',
  styleUrl: './nav-button.component.scss'
})
export class NavButtonComponent {
  disabled = input(false);
  link = input.required<string | any[] | UrlTree | null | undefined>();
  label = input.required<string>();
  bgColor = input<AcceptedBackgroundColors>('grey');
}
