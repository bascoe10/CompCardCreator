import { Component, OnInit } from "@angular/core";

import fitty from "fitty";

import { Model } from "../models/model";

@Component({
  selector: "app-comp1",
  templateUrl: "./comp1.component.html",
  styleUrls: ["./comp1.component.sass"]
})
export class Comp1Component implements OnInit {
  model = new Model();

  constructor() {}

  ngOnInit() {}

  adjustToFitDiv() {
    let name = <HTMLElement>document.querySelector("#name-id");
    let style = getComputedStyle(name);

    if (!style) style = name.style;
    var fontSize = parseInt(style.fontSize);

    if (name.scrollWidth < 256.22) {
      name.style.fontSize = "40px";
      return;
    }

    while (name.scrollWidth >= 256.22) {
      fontSize--;
      name.style.fontSize = fontSize.toString() + "px";
    }
  }
}
