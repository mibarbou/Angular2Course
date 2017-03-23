"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var authors_component_1 = require("./authors/authors.component");
var authors_service_1 = require("./authors/authors.service");
var messages_component_1 = require("./messages/messages.component");
var messages_service_1 = require("./messages/messages.service");
var favorite_component_1 = require("./favorite/favorite.component");
var auto_grow_directive_1 = require("./directives/auto-grow.directive");
var like_component_1 = require("./like/like.component");
var voter_component_1 = require("./voter/voter.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [app_component_1.AppComponent, authors_component_1.AuthorsComponent, messages_component_1.MessagesComponent, favorite_component_1.FavoriteComponent, auto_grow_directive_1.AutoGrowDirective, like_component_1.LikeComponent, voter_component_1.VoterComponent],
        providers: [authors_service_1.AuthorsService, messages_service_1.MessagesService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map