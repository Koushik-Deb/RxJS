import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fromEvent, interval, noop, Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import {createHTTPObservable} from "../util/util";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {  
    const http$ = createHTTPObservable("/api/courses");

    const courses$ = http$
                      .pipe(
                        map(res=>Object.values(res["payload"]))
                      );    //derive observables from existing ones

    const subHttp = courses$.subscribe(
      courses=>console.log(courses),
      ()=>{},
      ()=>console.log("This is complete")
      );
  }

}
