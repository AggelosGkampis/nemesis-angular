import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nemesis';

  showVideo: boolean = false;

  constructor(private router: Router) {}
 
}