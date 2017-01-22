import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResult, ResourceResult } from '../../domain/search-result.model';
import { SearchService } from '../../services/search.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'main-component',
    templateUrl: './main.template.html'
})

export class MainComponent {

    @ViewChild('search') search;

    private searchResults : SearchResult[];

    private cartItemsMain : ResourceResult[] = [];

    constructor(private router: Router, private searchService: SearchService) {
        this.init();
    }

    updateCart(result : ResourceResult[]) {
        this.cartItemsMain = result;
    }


    async init() {
        this.searchResults = await this.searchService.search('cacamiel');
    }
}
