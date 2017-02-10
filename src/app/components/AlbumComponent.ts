import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SpotifyService } from '../services/SpotifyService';

@Component({
	selector: 'album',
	templateUrl: './album_component.html'
})

export class AlbumComponent implements OnInit {
	id: string;
	album: Object;

	constructor(private route: ActivatedRoute,
							private spotify: SpotifyService,
							private location: Location){

		route.params.subscribe(params => {this.id = params['id'];});
	}

	ngOnInit(): void {
		this.spotify
			.getAlbum(this.id)
			.subscribe( (res: any) => {
				// console.log(res)
				this.renderAlbums(res);
			})
	}
	back(): void {
		this.location.back();
	}

	renderAlbums(res: any): void {
		this.album = res;
	}

}