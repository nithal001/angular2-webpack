import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class QuizService {
    constructor(private http: Http) { }

    get(url: string) {
        this.http.get(url).map(res => res.text().length > 0 ? res.json() : null)
    }

    getAll() {
        return [
            { id: 'data/quiz.service.json', name: 'Quiz Stage One'}
        ]
    }
}
