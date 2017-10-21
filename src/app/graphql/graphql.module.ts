import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLinkHandler } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const uri = 'https://www.graphqlhub.com/graphql';

@NgModule({
  exports: [
    ApolloModule,
    HttpClientModule,
    HttpLinkModule,
  ],
})
export class GraphqlModule {
  constructor(private apollo: Apollo, private http: HttpClient) {
    this.apollo.create({
      link: new HttpLinkHandler(http, { uri }),
      cache: new InMemoryCache,
    });
  }
}
