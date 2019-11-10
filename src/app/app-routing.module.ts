import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ThemeSelectorComponent } from "./theme-selector/theme-selector.component";
import { Comp1Component } from "./comp1/comp1.component";
import { Comp2Component } from "./comp2/comp2.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: LandingPageComponent },
  { path: "themes", component: ThemeSelectorComponent },
  { path: "comp1", component: Comp1Component },
  { path: "comp2", component: Comp2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
