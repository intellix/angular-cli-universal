import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { query, QueryResponse, Listing } from './reddit.graphql';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.scss'],
})
export class RedditComponent implements OnInit {

  @Input() subreddit: string;

  listings: Listing[] = [];
  loading = true;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    const variables = { name: this.subreddit };
    this.apollo.watchQuery<QueryResponse>({ query, variables })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.listings = data.reddit.subreddit.newListings;
        this.loading = loading;
      });
  }

}
