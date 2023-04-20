import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuList = [
    {
      title: 'Carne a la parrilla',
      image: '../../assets/menu/plato1.png',
      description:
      'Carne a la parrilla con chile toreado y cebolla asada.'
    },
    {
      title: 'Carne en fajitas',
      image: '../../assets/menu/plato2.png',
      description:
      'Carne a la parrilla en fajitas con chile toreado y cebolla asada.'
    },
    {
      title: 'Todo de la parrilla',
      image: '../../assets/menu/plato3.png',
      description:
      'Carne, cabrito, papa asada, cebolla asada directamente desde la parrilla y una guarnicion ligera de verduras al vapor.'
    },
    {
      title: 'Carne en salsa',
      image: '../../assets/menu/plato4.png',
      description:
      'Carne a la parrilla picada en cuadritos y cocida en un mezcla de chiles, tomate y cebolla.'
    
    },
    {
      title: 'Regio por primera vez',
      image: '../../assets/menu/plato5.png',
      description:
      'Carne, cabrito, salchicha, cebolla desde la parrilla, un queso flameado con chorizo, guacamole y unas tortillas para armarse unos buenos tacos'
    },
    {
      title: 'El rey del cabrito',
      image: '../../assets/menu/plato6.png',
      description:
      'Cabrito completo pide el corte al gusto.'
    },
  ]

}
