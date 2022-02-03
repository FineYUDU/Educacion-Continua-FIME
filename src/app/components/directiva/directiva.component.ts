import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent implements OnInit {
  mostrar:boolean=true; 
  autor:string='Stan Lee';
  texto:string='El principio de nosotros es el final de ustedes';
  personajes:string[]=["Hulk","Thor","Capitan America","Black Widow", "Wolverine"];

  constructor() { }

  ngOnInit(): void {
  }

}
