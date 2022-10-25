import { Component, OnInit } from "@angular/core";
import { noop } from "rxjs";
import { map } from "rxjs/operators";
import { createHttpObservable } from "../common/util";

@Component({
  selector: "part-three-operators",
  templateUrl: "./part-three-operators.component.html",
  styleUrls: ["./part-three-operators.component.css"],
})
export class PartThreeOperatorsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const http$ = createHttpObservable("/api/courses");

    const courses$ = http$.pipe(map((res) => res["payload"]));

    courses$.subscribe(
      (courses) => console.log(courses),
      noop,
      () => console.log("completed")
    );
  }
}
