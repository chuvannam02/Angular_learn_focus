import { CommonModule } from '@angular/common';
import { HeroesListRoutingModule } from './heroes-list-routing.module';
import { HeroesListComponent } from './heroes-list.component';
import { NgModule } from '@angular/core';
import { HeroDetailModule } from '../hero-detail/hero-detail.module';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, HeroesListRoutingModule, FormsModule],
  declarations: [HeroesListComponent, HeroDetailComponent],
})
export class HeroesListModule {}
