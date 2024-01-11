import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: HeroDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class HeroDetailRoutingModule {}
