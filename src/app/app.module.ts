import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphqlModule } from './graphql/graphql.module';
import { RedditModule } from './reddit/reddit.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    TransferHttpCacheModule,
    GraphqlModule,
    AppRoutingModule,
    RedditModule,
    PokemonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
