
import { Component } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
    selector: 'authors',
    template: `<h2>Authors</h2>
               <input type="text" autoGrow />
               <ul>
               <li *ngFor="let a of authors">{{ a }}</li>
               </ul>
              `
})

export class AuthorsComponent {
    authors;

    constructor(authorsService: AuthorsService) {
        this.authors = authorsService.getAuthors();
    }
}