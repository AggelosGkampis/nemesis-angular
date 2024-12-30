import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { User } from '../../models/user'; 
import { Challenge } from '../../models/challenge';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.css'],
})

export class MainComponent {
  email: string = '';
  user: User | null = null;
  errorMessage: string | null = null;
  isLoading: boolean = false;

  constructor(private router: Router) {}


  // Simulate fetching user and challenges
  async getUser(email: string): Promise<User> {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(
          new User(
            'JohnDoe',
            email,
            'password123',
            120,
            [
              new Challenge(1, 'Challenge 1', 'Description 1', 3, 'InProgress'),
              new Challenge(2, 'Challenge 2', 'Description 2', 5, 'Completed'),
            ]
          )
        );
      }, 1000)
    );
  }

  async fetchData() {
    this.errorMessage = null;

    if (!this.email) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    this.isLoading = true; 
    this.playVideo();
    this.playSound();

    try {
      this.user = await this.getUser(this.email);
      this.router.navigate(['/player', this.email]);
    } catch (error) {
      this.errorMessage = 'An error occurred while fetching data.';
      console.error(error);
    }
  }

  playSound(): void {
    const audio = new Audio('assets/Voicy_BANKAI.mp3');
    audio.play().catch((error) => {
      console.error('Error playing sound:', error);
    });
  }

  playVideo(): void {
    const videoElement = document.getElementById('loading-video') as HTMLVideoElement;
    if (videoElement) {
      videoElement.play();
      setTimeout(() => {
        videoElement.pause();
        videoElement.currentTime = 0; // Reset video
      }, 1500); // Match setTimeout duration
    }
  }

 }
  
