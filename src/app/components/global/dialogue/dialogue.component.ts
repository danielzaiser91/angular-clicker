import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [],
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.scss'
})
export class DialogueComponent {
  config = input({ dialogueId: 1, isOpen: false });
  isOpen = computed(() => this.config().isOpen);

  close() {
    this.config().isOpen = false
  }
}
