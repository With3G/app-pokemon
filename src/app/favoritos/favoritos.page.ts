import { Component, OnInit } from '@angular/core';
// importamos el servicio:
import { ListadoPokemonService } from '../listado-pokemon.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  // Creamos un atributo que recibirá el array:
  arrayFav = [];
  // Declaramos el objeto servicio:
  constructor(private servicio: ListadoPokemonService) { }

  ngOnInit() {
  }
  // Cuando estemos a punto de entrar a la vista:
  ionViewWillEnter(){
    // Guardaremos en nuestro array el array que recupera el servicio:
    this.arrayFav = this.servicio.getFav();
    // Hacemos una consola para ver si se esta recibiendo bien:
    console.log(this.arrayFav);
  }

}
