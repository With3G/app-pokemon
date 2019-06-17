import { Component, OnInit } from '@angular/core';
// Importamos el servicio:
import { ListadoPokemonService } from '../listado-pokemon.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  // Creamos un atributo para recibir los datos de la api:
  listado:any;

  // Cargamos el objeto service:
  constructor(private servicio: ListadoPokemonService) { }

  ngOnInit() {
    // Ahora vamos a ejecutar la url para implementar el servicio:
    this.servicio.getData().subscribe(data =>{
      console.log(data);
      this.listado = data;
    });
  }
  // Creamos el metodo que recupera el id de favorito:
  favorite(id){
    // Este utiliza el método del servicio para guardar el favorito:
    this.servicio.setFav(id);
  }

}
