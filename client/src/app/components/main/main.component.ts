import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'main-component',
    templateUrl: './main.template.html'
})
export class MainComponent {
    constructor(private router: Router) {
    }
}
