import { APP_BOOTSTRAP_LISTENER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//router
import { APP_ROUTING } from './app.router';

//componentes
import { AppComponent } from './app.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectivaComponent } from './components/directiva/directiva.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    AlumnosComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    DirectivaComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
