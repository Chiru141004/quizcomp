
export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Quiz {
  topic: string;
  questions: Question[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeLimitPerQuestion: number;
}

export interface Player {
  id: string;
  name: string;
  score: number;
  isHost: boolean;
}

export type PlayerAnswer = {
  questionIndex: number;
  answer: string;
  isCorrect: boolean;
};

export interface GameState {
  roomCode: string;
  quiz: Quiz;
  players: Player[];
  status: 'waiting' | 'in-progress' | 'finished';
  currentQuestionIndex: number;
  answers: Record<string, PlayerAnswer[]>; // { playerId: [PlayerAnswer] }
  questionStartTime: number | null;
}
