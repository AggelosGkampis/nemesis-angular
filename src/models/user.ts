import { Challenge } from '../models/challenge';

export class User {
  nickname: string;
  email: string; // Unique key
  password: string;
  points: number;
  challenges: any;

  constructor(
    nickname: string,
    email: string,
    password: string,
    points: number,
    challenges: Challenge[] = []
  ) {
    this.nickname = nickname;
    this.email = email;
    this.password = password;
    this.points = points;
    this.challenges = challenges;
  }
}
