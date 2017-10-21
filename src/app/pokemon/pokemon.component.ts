import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() id: number;

  pokemon;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.id}/`)
      .map((data: any) => ({
        name: data.name,
        weight: data.weight,
        height: data.height,
        base_experience: data.base_experience,
      }))
      .subscribe(pokemon => this.pokemon = pokemon);
  }

}
