import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DialogueComponent } from './components/global/dialogue/dialogue.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DialogueComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-clicker';
  dialogConfig = { dialogueId: 1, isOpen: false }
  openDialogue() {
    this.dialogConfig.isOpen = true;
  }
}
