import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListadoPokemonService {
  fav = [];

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964');
  }

  getPokemon(id){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + id);
  }
  setFav(fav){
    this.fav.push(fav);
  }
  // Con este metodo devolvemos el valor del array:
  getFav(){
    return this.fav;
  }
}
