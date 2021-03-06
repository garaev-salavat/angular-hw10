import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMyComponent } from './about-my/about-my.component';
import { FinalWorkComponent } from './final-work/final-work.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { Page404Component } from './page404/page404.component';
import { RecommendedReadingComponent } from './recommended-reading/recommended-reading.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    loadChildren: './home-page/home-page.module#HomePageModule',
    pathMatch: 'full',
  },
  {
    path: 'about-my',
    component: AboutMyComponent,
    loadChildren: () =>
      import('./about-my/about-my.module').then((file) => file.AboutMyModule),
  },
  {
    path: 'my-projects',
    component: MyProjectsComponent,
    loadChildren: () =>
      import('./my-projects/my-projects.module').then((file) => file.MyProjectsModule),
  },
  {
    path: 'recommended-reading',
    component: RecommendedReadingComponent,
    loadChildren: () =>
      import('./recommended-reading/recommended-reading.module').then((file) => file.RecommendedReadingModule),
  },
  {
    path: 'final-work',
    component: FinalWorkComponent,
    loadChildren: () =>
      import('./final-work/final-work.module').then((file) => file.FinalWorkModule),
  },
  {
    path: '404',
    component: Page404Component,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
