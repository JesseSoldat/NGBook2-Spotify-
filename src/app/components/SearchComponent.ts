import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../services/SpotifyService';

@Component({
	selector: 'search',
	templateUrl: './search_component.html'
})

export class SearchComponent implements OnInit{
	query: string;

	constructor(private router: Router,
							private route: ActivatedRoute,
							private spotify: SpotifyService){
		this.route
			.queryParams
			.subscribe(params => { this.query = params['query'] || '';});

	}

	ngOnInit(): void {
		this.search();
	}

	search(): void {
		// console.log('this.query', this.query);
		if(!this.query) {
			return;
		}
		this.spotify
			.searchTrack(this.query)
			.subscribe( (res: any) => {
				console.log(res)
			});
	}

	submit(query: string): void {
		// console.log(query);
		this.router.navigate( ['search'], {queryParams: { query: query}})
			.then(_ => this.search());
	}
}