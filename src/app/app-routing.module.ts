import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMyComponent } from './about-my/about-my.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

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