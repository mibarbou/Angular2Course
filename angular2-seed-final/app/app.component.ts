import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>
            <authors></authors>
            <messages></messages>
            <i class="glyphicon glyphicon-star"></i>
            <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
            <like [total-likes]="tweet.totalLikes" [i-like]="tweet.iLike"></like>
            <voter
                [voteCount]="vote.voteCount"
                [myVote]="vote.myVote"
                (vote)="onVote($event)">
            </voter>
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

    tweet = {
        totalLikes: 10,
        iLike: false
    }

    vote = {
        voteCount: 10,
        myVote: 0
    }

    onVote($event){
        console.log($event);
    }
}
