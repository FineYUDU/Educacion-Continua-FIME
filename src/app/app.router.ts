import { RouterModule, Routes } from "@angular/router";
import { AlumnosComponent } from "./components/alumnos/alumnos.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { PruebaComponent } from "./components/prueba/prueba.component";
import { DirectivaComponent } from "./components/directiva/directiva.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const APP_ROUTES:Routes=[

    {path:'Alumnos', component:AlumnosComponent},
    {path:'Inicio', component:InicioComponent},
    {path:'Directiva', component:DirectivaComponent},
    {path:'Home', component:PruebaComponent},
    {path:'Heroes', component:HeroesComponent},
    {path:'**', pathMatch:'full', redirectTo:'Home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);