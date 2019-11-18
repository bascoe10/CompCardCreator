import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ImageCroppedEvent } from "ngx-image-cropper";

import html2canvas from "html2canvas";
import M from "materialize-css";

import { Model } from "../models/model";

@Component({
  selector: "app-comp1",
  templateUrl: "./comp1.component.html",
  styleUrls: ["./comp1.component.sass"]
})
export class Comp1Component implements OnInit, AfterViewInit {
  model = new Model();
  photoIndices = [1, 2, 3];
  imageChangedEvent: any = "";
  croppedImage: any = "";
  imageElement: HTMLElement;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    console.log("Afterviewinit");
    document.addEventListener("DOMContentLoaded", () => {
      const elems = document.querySelectorAll(".modal");
      M.Modal.init(elems, {});
      M.updateTextFields();
    });

    document.addEventListener("scroll", () => {
      const compCardContainer = document.querySelector(
        "#comp-card-container"
      ) as HTMLElement;
      const cardOffset = compCardContainer.offsetTop;

      if (window.pageYOffset > cardOffset) {
        compCardContainer.classList.add("sticky");
      } else {
        compCardContainer.classList.remove("sticky");
      }
    });
  }

  fileChangeEvent(event: any): void {
    const instance = M.Modal.getInstance(document.querySelector(`#modal1`));
    const selector = event.target.id.replace("image", "photo");
    instance.open();
    this.imageChangedEvent = event;
    this.imageElement = document.querySelector(`#${selector}`) as HTMLElement;
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
    const name = document.querySelector("#name-id") as HTMLElement;
    let style = getComputedStyle(name);

    if (!style) style = name.style;
    let fontSize = parseInt(style.fontSize);

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

    const div = document.querySelector(`#${selector}`) as HTMLElement;

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
    });
  }
}
