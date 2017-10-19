import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { query, QueryResponse, Listing } from './reddit.graphql';

const KEY = makeStateKey('app-reddit');

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.scss'],
})
export class RedditComponent implements OnInit {

  @Input() subreddit: string;

  listings: Listing[] = [];
  loading = true;

  constructor(private apollo: Apollo, private state: TransferState) { }

  ngOnInit() {
    if (this.state.hasKey(KEY)) {
      this.loading = false;
      this.listings = this.state.get(KEY, null as any);
    }

    if (!this.listings.length) {
      const variables = { name: this.subreddit };
      this.apollo.query<QueryResponse>({ query, variables })
        .subscribe(({ data, loading }) => {
          this.listings = data.reddit.subreddit.newListings;
          this.loading = loading;
          this.state.set(KEY, this.listings as any);
        });
      }
  }

}
