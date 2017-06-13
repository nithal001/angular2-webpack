import { Component OnInit } from '@angular/core';
import { QuizService } from '../_services/quiz.service';
import { Option, Question, Quiz, QuizConfig } from '../_models/index';

@Component({
    selector: 'quiz-stage-one',
    templateUrl: 'quiz-stage-one.component.html'
})
export class QuizStageOneComponent implements OnInit {
    quizes: any;
    quiz: Quiz = new Quiz(null);
    mode: 'quiz';
    quizName: string;
    config: QuizConfig = {
        'allowBack': true,
        'allowReview': true,
        'allowMove': false,  // if true, it will move to next question automatically when answered.
        'duration': 0, // indicates the time in which quiz needs to be completed. 0 means unlimited.
        'pageSize': 1,
        'requiredAll': false, // indicates if you must answer all the questions before submitting.
        'richText': false,
        'shuffleQuestions': false,
        'shuffleOptions': false,
        'showClock': false,
        'showPager': true,
        'theme': 'none'
    };
    pager = {
        index: 0,
        size: 1,
        count: 1
    }
    constructor(private quizService: QuizService) { }

    ngOnInit() {
        this.quizes = this.quizService.getAll();
        this.quizName = this.quizes[0].id;
        this.loadQuiz(this.quizName);
    }

    loadQuiz(quizName: string) {
        this.quizService.get(quizName).subscribe(res => {
            this.quiz = new Quiz(res);
            this.pager.count = this.quiz.questions.length;
        });
        this.mode = 'quiz';
    }

    get FilterQuestions() {
        return this.quiz.questions ?
        this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
    }

    onSelect(question: Question, option:Option ) {
        if(question.questionTypeId === 1) {
            question.options.forEach((x) => {
                if(x.id !== option.id) x.selected = false;
            });
        }

        if(this.config.autoMove) {
            this.goTo(this.pager.index + 1);
        }
    }

    
}
