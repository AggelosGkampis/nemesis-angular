export class Challenge {
    id: number;
    title: string;
    description: string;
    difficulty: number;
    status: 'InProgress' | 'Completed';
  
    constructor(
      id: number,
      title: string,
      description: string,
      difficulty: number,
      status: 'InProgress' | 'Completed'
    ) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.difficulty = difficulty;
      this.status = status;
    }
  }
  