import { SubscriptionFormComponent } from './subscription/subscription-form.component';
import { ContactFormComponent } from './contact/contact-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors/authors.service';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages/messages.service';
import { FavoriteComponent } from './favorite/favorite.component';

import { AutoGrowDirective } from './directives/auto-grow.directive';
import { LikeComponent } from './like/like.component';
import { VoterComponent } from './voter/voter.component';

import { TweetComponent } from './tweet/tweet.component';
import { TweetsComponent } from './tweet/tweets.component';
import { TweetService } from './tweet/tweet.service';

import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent,
    AuthorsComponent,
    MessagesComponent,
    FavoriteComponent,
    AutoGrowDirective,
    LikeComponent,
    VoterComponent,
    TweetComponent,
    TweetsComponent,
    ZippyComponent,
    ContactFormComponent,
    SubscriptionFormComponent
  ],
  providers: [AuthorsService, MessagesService, TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
