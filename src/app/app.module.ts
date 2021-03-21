import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMyModule } from './about-my/about-my.module';
import { MyProjectsModule } from './my-projects/my-projects.module';
import { HomePageModule } from './home-page/home-page.module';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecommendedReadingModule } from './recommended-reading/recommended-reading.module';
import { FinalWorkModule } from './final-work/final-work.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorisationInterceptor } from './authorisation.interceptor';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [AppComponent, Page404Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutMyModule,
    MyProjectsModule,
    HomePageModule,
    MaterialModule,
    BrowserAnimationsModule,
    RecommendedReadingModule,
    FinalWorkModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
