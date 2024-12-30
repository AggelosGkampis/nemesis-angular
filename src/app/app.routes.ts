import { Routes } from '@angular/router';
import { ChallengeComponent } from '../components/challenge/challenge.component';
import { MainComponent } from '../components/main-page/main-page';
import { PlayerComponent } from '../components/player/player.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default route
    { path: 'home', component: MainComponent },
    { path: 'challenge-form', component: ChallengeComponent },
    { path: 'player/:email', component: PlayerComponent },
];

