import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ApolloModule, Apollo } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink, HttpLinkHandler } from './http-link';

const uri = 'https://www.graphqlhub.com/graphql';

@NgModule({
  providers: [
    HttpLink,
  ],
  exports: [
    ApolloModule,
    HttpClientModule,
  ],
})
export class GraphqlModule {
  constructor(private apollo: Apollo, private httpLink: HttpLink) {
    this.apollo.create({
      link: httpLink.create({ uri, method: 'GET' }),
      cache: new InMemoryCache(),
    });
  }
}
