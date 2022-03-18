import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { GenderPipe } from './helpers/pipes/gender.pipe';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { HeroItemComponent } from './components/hero-item/hero-item.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { SubjectListComponent } from './screens/subject-list/subject-list.component';
import { QuizComponent } from './screens/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GenderPipe,
    HeroFormComponent,
    HeroItemComponent,
    HomeComponent,
    SubjectListComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
