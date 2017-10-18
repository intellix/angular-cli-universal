import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

export interface Listing {
  title: string;
  comments: {
    body: string;
    author: {
      username: string;
    };
  }[];
}

export interface QueryResponse {
  reddit: {
    subreddit: {
      newListings: Listing[];
    }
  };
}

export const query: DocumentNode = gql`
  query Reddit($name: String!) {
    reddit {
      subreddit(name: $name) {
        newListings(limit: 10) {
          title
          comments {
            body
            author {
              username
            }
          }
        }
      }
    }
  }
`;
