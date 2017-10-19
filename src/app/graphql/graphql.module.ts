import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserTransferStateModule, TransferState, makeStateKey } from '@angular/platform-browser';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink, HttpLinkHandler } from 'apollo-angular-link-http';
import { InMemoryCache, NormalizedCache } from 'apollo-cache-inmemory';

const STATE_KEY = makeStateKey<any>('apollo.state');
const uri = 'https://www.graphqlhub.com/graphql';

@NgModule({
  exports: [
    BrowserTransferStateModule,
    ApolloModule,
    HttpClientModule,
    HttpLinkModule,
  ],
})
export class GraphqlModule {

  cache = new InMemoryCache;
  link: HttpLinkHandler = this.httpLink.create({ uri });

  constructor(private apollo: Apollo, private httpLink: HttpLink, private readonly state: TransferState) {

    this.apollo.create({
      link: this.link,
      cache: this.cache,
    });

    const isBrowser = this.state.hasKey<NormalizedCache>(STATE_KEY);

    if (isBrowser) {
      this.onBrowser();
    } else {
      this.onServer();
    }
  }

  onServer() {
    this.state.onSerialize(STATE_KEY, () => this.cache.extract());
  }

  onBrowser() {
    const state = this.state.get<NormalizedCache>(STATE_KEY, null);
    this.cache.restore(state);
  }
}
