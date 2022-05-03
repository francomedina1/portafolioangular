import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudyComponent } from './components/study/study.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BarralateralComponent } from './components/barralateral/barralateral.component';

@NgModule({
  declarations: [
    AppComponent,
    StudyComponent,
    FooterComponent,
    ContactComponent,
    ExperienceComponent,
    SkillsComponent,
    AboutmeComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    BarralateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
