import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SpotifyService } from '../services/SpotifyService';

@Component({
	selector: 'artist',
	templateUrl: './artist_component.html'
})

export class ArtistComponent implements OnInit {
	id: string;
	artist: Object;

	constructor(private route: ActivatedRoute,
							private location: Location,
							private spotify: SpotifyService){

		route.params.subscribe(params => {
			this.id = params['id'];
		});

	}

	ngOnInit(): void {
		this.spotify
			.getArtist(this.id)
			.subscribe( (res: any) => this.renderArtist(res));
	}

	renderArtist(res: any): void {
		this.artist = res;
	}

	back(): void {
		this.location.back();
	}
}