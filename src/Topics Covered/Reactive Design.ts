/// paste this into home.component.ts . (however you may need to change home.component.html accordingly)


import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {interval, Observable, of, timer} from 'rxjs';
import {catchError, delayWhen, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import { createHTTPObservable } from '../util/util';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    beginnerCourses$: Observable<Course[]>;
    advancedCourses$: Observable<Course[]>;

    constructor() {

    }

    ngOnInit() {

        const http$ = createHTTPObservable("/api/courses");

        const courses$: Observable<Course[]> = http$
                            .pipe(
                            map(res=>Object.values(res["payload"]))
                            );    //derive observables from existing ones

        this.beginnerCourses$ =  courses$
                                    .pipe(
                                        map(courses=>courses
                                            .filter(course=>course.category=="BEGINNER"))
                                    );

        this.advancedCourses$ = courses$
                                    .pipe(
                                        map(courses=>courses
                                            .filter(course=>course.category=="ADVANCED"))
                                    );

    }

}
