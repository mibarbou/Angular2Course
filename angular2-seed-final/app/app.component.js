"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tweet_service_1 = require("./tweet/tweet.service");
var AppComponent = (function () {
    function AppComponent(tweetService) {
        this.post = {
            title: "Title",
            isFavorite: true
        };
        this.tweet = {
            totalLikes: 10,
            iLike: false
        };
        this.vote = {
            voteCount: 10,
            myVote: 0
        };
        this.tweets = tweetService.getTweets();
    }
    AppComponent.prototype.onFavoriteChange = function ($event) {
        console.log($event);
    };
    AppComponent.prototype.onVote = function ($event) {
        console.log($event);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>My First Angular 2 App</h1>\n            <authors></authors>\n            <messages></messages>\n            <i class=\"glyphicon glyphicon-star\"></i>\n            <favorite [is-favorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></favorite>\n            <like [totalLikes]=\"tweet.totalLikes\" [iLike]=\"tweet.iLike\"></like>\n            <voter\n                [voteCount]=\"vote.voteCount\"\n                [myVote]=\"vote.myVote\"\n                (vote)=\"onVote($event)\">\n            </voter>\n\n            <div *ngFor=\"let tweet of tweets\">\n                <tweet [data]=\"tweet\"></tweet>\n            </div>\n           "
    }),
    __metadata("design:paramtypes", [tweet_service_1.TweetService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map