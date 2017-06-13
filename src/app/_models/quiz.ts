import { QuizConfig } from './quiz-config';
import  { Question } from './question';

export class Quiz {
    id: number;
    name: string;
    description: string;
    config: QuizConfig;
    questions: Question[];

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.config = new QuizConfig(data.config);
        this.questions = [];
        data.question.forEach(q => {
            this.questions.push(new Question(q));
        });
    }
}
