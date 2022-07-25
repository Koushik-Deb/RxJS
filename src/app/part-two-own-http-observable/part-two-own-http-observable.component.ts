import { Component, OnInit } from "@angular/core";
import { noop, observable, Observable } from "rxjs";

@Component({
  selector: "part-two-own-http-observable",
  templateUrl: "./part-two-own-http-observable.component.html",
  styleUrls: ["./part-two-own-http-observable.component.css"],
})
export class PartTwoOwnHttpObservableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const http$ = new Observable((observer) => {
      fetch("/api/courses")
        .then((response) => {
          return response.json();
        })
        .then((body) => {
          observer.next(body);
          observer.complete();
        })
        .catch((err) => {
          observer.error(err);
        });
    });

    http$.subscribe(
      (courses) => console.log(courses),
      noop,
      () => console.log("Completed")
    );
  }
}
