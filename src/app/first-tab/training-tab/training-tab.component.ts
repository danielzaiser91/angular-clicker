import { Component } from '@angular/core';

@Component({
  selector: 'app-training-tab',
  standalone: true,
  imports: [],
  templateUrl: './training-tab.component.html',
  styleUrl: './training-tab.component.scss'
})
export class TrainingTabComponent {
  constructor() { console.log('training tab') }
}
