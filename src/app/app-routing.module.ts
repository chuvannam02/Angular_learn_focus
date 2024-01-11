import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  { path: 'crisis-list', component: CrisisListComponent },
  {
    path: 'hero/:id',
    loadChildren: () =>
      import('./hero-detail/hero-detail.module').then(
        (m) => m.HeroDetailModule
      ),
  },
  {
    path: 'heroes-list',
    loadChildren: () =>
      import('./heroes-list/heroes-list.module').then(
        (m) => m.HeroesListModule
      ),
  },
  { path: '', redirectTo: '/heroes-list', pathMatch: 'full' },
  {
    matcher: (url) => {
      if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
        return {
          consumed: url,
          posParams: {
            username: new UrlSegment(url[0].path.slice(1), {}),
          },
        };
      }

      return null;
    },
    component: ProfileComponent,
  },
  { path: '**', component: PageNotFoundComponent },
  // wildcard route.
  // Bất kỳ route nào không trùng với các route đã tồn tại trong cấu hình thì sẽ sẽ dùng route này
];
// A route definition is a JavaScript object.
// Each route typically has two properties.
// The first property, path, is a string that specifies the URL path for the route.
//  The second property, component, is a string that specifies what component your application should display for that path.
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })], // <-- debugging purposes only)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
