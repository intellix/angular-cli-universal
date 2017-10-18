import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApolloModule } from 'apollo-angular';
import { ApolloClient, createNetworkInterface } from 'apollo-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedditModule } from './reddit/reddit.module';
import { HomeComponent } from './home/home.component';

export function provideClient(): ApolloClient {
  return new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: 'https://www.graphqlhub.com/graphql'
    }),
  });
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    AppRoutingModule,
    ApolloModule.forRoot(provideClient),
    RedditModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
