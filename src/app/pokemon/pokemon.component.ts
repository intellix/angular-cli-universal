import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() id: number;

  pokemon;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.id}/`)
      .subscribe(r => this.pokemon = r.json());
  }

}
