import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Challenge } from '../../models/challenge';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent {
  challengeForm: FormGroup;  // Declare the form group

  constructor(private fb: FormBuilder) {

    this.challengeForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      difficulty: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
      status: ['InProgress', Validators.required]  // Default status is 'InProgress'
    });
  }

  onSubmit() {
    if (this.challengeForm.valid) {
      const { title, description, difficulty, status } = this.challengeForm.value;

      
      const newChallenge = new Challenge(
        0,
        title,
        description,
        difficulty,
        status
      );

      console.log('New Challenge:', newChallenge);
      alert('Challenge Created Successfully!');
    } else {
      console.log('Form is invalid!');
    }
  }
}
