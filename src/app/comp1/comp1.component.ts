import { Component, OnInit } from "@angular/core";
import { ImageCroppedEvent } from "ngx-image-cropper";

import html2canvas from "html2canvas";
import M from "materialize-css";

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

  ngAfterViewInit() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".modal");
      var options = {};
      var instances = M.Modal.init(elems, options);
    });
  }

  imageChangedEvent: any = "";
  croppedImage: any = "";
  imageElement: HTMLElement;

  fileChangeEvent(event: any, selector: any): void {
    var instance = M.Modal.getInstance(document.querySelector(`#modal1`));
    instance.open();
    this.imageChangedEvent = event;
    this.imageElement = <HTMLElement>document.querySelector(`#${selector}`);
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  doneEditing() {
    this.imageElement.style.background = `url(${this.croppedImage})`;
    this.imageElement.style.backgroundSize = "cover";
  }

  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

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

  processImage(imageInput, selector) {
    console.log(imageInput);
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    let div = <HTMLElement>document.querySelector(`#${selector}`);

    reader.addEventListener("load", (event: any) => {
      div.style.background = `url(${event.target.result})`;
      div.style.backgroundSize = "cover";
    });

    reader.readAsDataURL(file);
  }

  downloadCard() {
    window.scrollTo(0, 0);
    html2canvas(document.querySelector("#comp-card")).then(function(canvas) {
      window.location.assign(canvas.toDataURL());
      // window.open().document.write('<img src="' + canvas.toDataURL() + '" />');
      // document.body.appendChild(canvas);
    });
  }
}
