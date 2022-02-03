import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
})
export class AlumnosComponent {


  juego:string = 'Xbox';
  nombre:string = 'Proyecto Angular';
  contenido:string = 'Gamer';

  constructor() {
    //Parametros Obligatorios
    function activar(quien:string) {
      let mensaje:string;
      mensaje = `${quien} activo la batiseñal`;
      console.log( mensaje );}


    activar('Gordon');
//--------------------------------------------------
    //Parametros por defecto
    function activar1(quien:string, objeto:string ="alarma") {
       let mensaje:string;
      mensaje = `${quien} activo la ${objeto}`;
      console.log( mensaje );}


    activar1('Guason');
  
//--------------------------------------------------
    //Parametros opcional
    function activar2(quien:string, objeto:string ="alarma", momento?:string) {
       let mensaje:string;
      mensaje = `${quien} activo la ${objeto} por la ${momento}`;
      console.log( mensaje );}


    activar2('Guason','bomba', 'tarde');


    //Objeto
    let avenger={
      nombre:'Steve',
      clave:'Capitan America',
      poder:'Fuerza'
    }
    // let nombre = avenger.nombre;
    // let clave = avenger.clave;
    // let poder = avenger.poder;
    let {poder, clave, nombre} = avenger;

    console.log(nombre, poder, clave);
    
  }
}
