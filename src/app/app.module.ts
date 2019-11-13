import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ImageCropperModule } from "ngx-image-cropper";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Comp1Component } from "./comp1/comp1.component";
import { Comp2Component } from "./comp2/comp2.component";
import { ThemeSelectorComponent } from "./theme-selector/theme-selector.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    ThemeSelectorComponent,
    LandingPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ImageCropperModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
