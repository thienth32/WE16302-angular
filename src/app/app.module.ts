import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { GenderPipe } from './helpers/pipes/gender.pipe';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { HeroItemComponent } from './components/hero-item/hero-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GenderPipe,
    HeroFormComponent,
    HeroItemComponent,
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
