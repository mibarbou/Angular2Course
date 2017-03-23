import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors/authors.service';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages/messages.service';
import { FavoriteComponent } from './favorite/favorite.component';

import { AutoGrowDirective } from './directives/auto-grow.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,  AuthorsComponent,  MessagesComponent, FavoriteComponent, AutoGrowDirective],
  providers: [ AuthorsService, MessagesService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
