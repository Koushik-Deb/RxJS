

// JUST PASTE THIS IN app/about/about.component.ts to run this 




import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fromEvent, interval, noop, Observable, timer } from 'rxjs';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

                        //RxJS CORE Concepts 
    //--------------------------------------------------------------
    // const interval$ = interval(1000); //observables
    
    // const timer$ = timer(3000,1000); //observables

    // const subInterval = interval$.subscribe(val=>console.log("Interval Stram 1 "+ val)); //need to subscribe to observables

    // const subTimer = timer$.subscribe(val=>console.log("Timer Stram 1 "+ val)); //need to subscribe to observables

    // setTimeout(()=>{
    //   subInterval.unsubscribe(); //need to unsubscribe from observables
    //   subTimer.unsubscribe(); //need to unsubscribe from observables
    // },5000)

    // const click$ = fromEvent(document,'click');

    // click$.subscribe( //subscirbe has three functionalities
    //   evt => console.log(evt), //event ommition
      
    //   err => console.log(err), //throwing error

    //   ()=> console.log("Complted") //completion
      
    //   );

    //---------------------------------------------------------------
  
                          //HTTP CUSTOM OBSERVABLES
    //---------------------------------------------------------------
    
    const http$ = new Observable(observer=>{
      fetch("/api/courses")
      .then(response=>{
        return response.json()
      })
      .then(body=> {
        observer.next(body);

        observer.complete();
      })
      .catch(ex=>{
        observer.error(ex);
      })
  
    });

    const subHttp = http$.subscribe(
      courses=>console.log(courses),
      ()=>{},//you can replace this with noop
      ()=>console.log("This is complete")
      );
  
    setTimeout(()=>{
      subHttp.unsubscribe();
    },5000);
  }

}
