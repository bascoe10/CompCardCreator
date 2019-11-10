import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-theme-selector",
  templateUrl: "./theme-selector.component.html",
  styleUrls: ["./theme-selector.component.sass"]
})
export class ThemeSelectorComponent implements OnInit {
  CompCards = [
    { title: "Comp 1", name: "comp1", link: "/comp1" },
    { title: "Comp 2", name: "comp2", link: "/comp2" }
  ];

  constructor() {}

  ngOnInit() {}
}
