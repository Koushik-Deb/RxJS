import { Component, OnInit } from "@angular/core";
import { fromEvent, interval, timer } from "rxjs";

@Component({
  selector: "part-one-simple-explanation",
  templateUrl: "./part-one-simple-explanation.component.html",
  styleUrls: ["./part-one-simple-explanation.component.css"],
})
export class PartOneSimpleExplanationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const interval$ = interval(1000);
    const timer$ = timer(3000, 1000);
    const click$ = fromEvent(document, "click");

    const subInterval = interval$.subscribe((val) =>
      console.log("Interval$ => " + val)
    );
    const subTimer = timer$.subscribe((val) => console.log("Timer$ => ", val));
    const subClick = click$.subscribe(
      (evt) => console.log(evt),
      (err) => console.log(err),
      () => console.log("Stream Completed")
    );

    setTimeout(() => {
      subInterval.unsubscribe();
      subTimer.unsubscribe();
      subClick.unsubscribe();
    }, 5000);
  }
}
