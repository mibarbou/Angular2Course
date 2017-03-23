"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
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
        template: "<h1>My First Angular 2 App</h1>\n            <authors></authors>\n            <messages></messages>\n            <i class=\"glyphicon glyphicon-star\"></i>\n            <favorite [is-favorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></favorite>\n            <like [total-likes]=\"tweet.totalLikes\" [i-like]=\"tweet.iLike\"></like>\n            <voter\n                [voteCount]=\"vote.voteCount\"\n                [myVote]=\"vote.myVote\"\n                (vote)=\"onVote($event)\">\n            </voter>\n           "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map