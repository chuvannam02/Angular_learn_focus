import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroDetailComponent } from "./hero-detail.component";
import HeroDetailRoutingModule from "./hero-detail-routing.module";

@NgModule({
    imports: [
      CommonModule,
      HeroDetailRoutingModule
    ],
    declarations: [HeroDetailComponent]
  })
  export class HeroDetailModule { }