import { Component, OnInit } from '@angular/core';
// Importamos una librería para capturar parametros:
import { ActivatedRoute} from '@angular/router';
// Importamos el servicio:
import { ListadoPokemonService } from '../listado-pokemon.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {
  // Creamos los atributos para capturar los datos:
  idPokemon: string;
  nombrePokemon: string;
  listado: any;
  // Generamos el objeto router y el servicio:
  constructor(private activatedRoute: ActivatedRoute, private servicio: ListadoPokemonService) { }

  // Antes de cargar la vista cargaremos con el siguiente metodo las variables:
  ionViewWillEnter(){
    // Guardamos los valores recibidos por parámetros:
    this.idPokemon = this.activatedRoute.snapshot.paramMap.get('id');
    this.nombrePokemon = this.activatedRoute.snapshot.paramMap.get('nombre');
    // Recuperamos la información de la API:
    this.servicio.getPokemon(this.idPokemon).subscribe(data =>{
      console.log(data);
      this.listado = data;
    });
  }
 
  ngOnInit() {
  }

}
