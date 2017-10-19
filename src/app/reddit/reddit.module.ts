import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedditComponent } from './reddit.component';
import { GraphqlModule } from '../graphql/graphql.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    RedditComponent,
  ],
  exports: [
    RedditComponent,
  ],
})
export class RedditModule { }
