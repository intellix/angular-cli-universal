import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedditComponent } from './reddit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RedditComponent,
  ],
  exports: [
    RedditComponent,
  ],
})
export class RedditModule { }
