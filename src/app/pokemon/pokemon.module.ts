import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { PokemonComponent } from './pokemon.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [
    PokemonComponent,
  ],
  exports: [
    PokemonComponent,
  ],
})
export class PokemonModule { }
