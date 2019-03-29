import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
 
  datos: any = {nombre: 'Tom', apellido: 'castillo', edad: 18, documento: '1242135213'};
 
  constructor() { }

  ngOnInit() {
  }

  eventoBoton(){
    console.log(' Manejamos el evento del boton!');
  }

}
