import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { TweetService } from './tweet/tweet.service';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
            <authors></authors>
            <messages></messages>
            <i class="glyphicon glyphicon-star"></i>
            <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
            <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
            <voter
                [voteCount]="vote.voteCount"
                [myVote]="vote.myVote"
                (vote)="onVote($event)">
            </voter>

            <div *ngFor="let tweet of tweets">
                <tweet [data]="tweet"></tweet>
            </div>
            <zippy title="Who can see my stuff?">
                Content of who can see my stuff
            </zippy>
            <zippy title="Who can contact me?">
                Content of who can contact me
            </zippy>
            <contact-form></contact-form>
            <subscription-form></subscription-form> 
           `
})

export class AppComponent {
    tweets: any[];

    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }


    post = {
        title: "Title",
        isFavorite: true
    }

    onFavoriteChange($event) {
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

    onVote($event) {
        console.log($event);
    }
}
