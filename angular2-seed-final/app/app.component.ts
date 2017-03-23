import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>
            <authors></authors>
            <messages></messages>
            <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
           `
})
export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true
    }

    onFavoriteChange($event){
        console.log($event);
    }
}
