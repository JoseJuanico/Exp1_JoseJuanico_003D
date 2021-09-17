import { Component } from '@angular/core';


interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      icon: 'headset-outline',
      name: 'Estilos musicales',
      redirecTo: '/inicio'
    },
    {
      icon: 'star-outline',
      name: 'Top musical',
      redirecTo: '/estilos'
    },
    {
      icon: 'newspaper-outline',
      name: 'Registrarse',
      redirecTo: '/formulario'
    },
  ];
}

