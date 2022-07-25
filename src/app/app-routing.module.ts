import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { CourseComponent } from "./course/course.component";
import { PartOneSimpleExplanationComponent } from "./part-one-simple-explanation/part-one-simple-explanation.component";
import { PartTwoOwnHttpObservableComponent } from "./part-two-own-http-observable/part-two-own-http-observable.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "courses/:id",
    component: CourseComponent,
  },
  {
    path: "part-one-simple-explanation",
    component: PartOneSimpleExplanationComponent,
  },
  {
    path: "part-two-own-http-observable",
    component: PartTwoOwnHttpObservableComponent,
  },
  {
    path: "**",
    redirectTo: "/",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
