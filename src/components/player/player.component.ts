import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { User } from '../../models/user';
import { Challenge } from '../../models/challenge';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  user: User | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const email = this.route.snapshot.paramMap.get('email');
    if (email) {
      this.getUser(email);
    }
  }

  getUser(email: string) {
    // Simulate fetching the user data by email
    setTimeout(() => {
      this.user = new User(
        'JohnDoe',
        email,
        'password123',
        120,
        [
          new Challenge(1, 'Challenge 1', 'Description 1', 3, 'InProgress'),
          new Challenge(2, 'Challenge 2', 'Description 2', 5, 'Completed'),
        ]
      );
    }, 1000);
  }

  navigateToChallengeForm() {
    this.router.navigate(['/challenge-form']);
}
}