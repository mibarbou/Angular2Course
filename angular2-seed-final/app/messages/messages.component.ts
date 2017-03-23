
import { Component } from '@angular/core';
import { MessagesService } from './messages.service';

@Component({
    selector: 'messages',
    template: `<h2>Messages</h2>
        <ul>
            <li *ngFor="let m of messages">{{ m }}</li>
        </ul>
    `
})

export class MessagesComponent {
    messages;

    constructor(messagesService: MessagesService) {
        this.messages = messagesService.getMessages();
    }
}