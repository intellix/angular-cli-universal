import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { RedditModule } from '../reddit/reddit.module';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule,
    RedditModule,
  ],
  declarations: [LazyComponent],
})
export class LazyModule { }
