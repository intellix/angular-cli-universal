import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const KEY = makeStateKey('app-pokemon');

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() id: number;

  pokemon;

  constructor(private http: Http, private state: TransferState) { }

  ngOnInit() {
    this.pokemon = this.state.get(KEY, null as any);

    if (!this.pokemon) {
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.id}/`)
        .map(res => {
          const data = res.json();
          return {
            name: data.name,
            weight: data.weight,
            height: data.height,
            base_experience: data.base_experience,
          };
        })
        .subscribe(pokemon => {
          this.pokemon = pokemon;
          this.state.set(KEY, this.pokemon as any);
        });
    }
  }

}
