import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SpotifyService } from '../services/SpotifyService';

@Component({
	selector: 'track',
	templateUrl: './track_component.html'
})

export class TrackComponent implements OnInit {
	id: string;
	track: Object;

	constructor(private route: ActivatedRoute,
							private spotify: SpotifyService,
							private location: Location){
		route.params.subscribe(params => { this.id = params['id'];});
	}

	ngOnInit(): void {
		this.spotify
			.getTrack(this.id)
			.subscribe( (res: any) => {
				this.renderTrack(res);
			});
	}

	renderTrack(res: any): void {
		this.track = res;
	}

	back(): void {
		this.location.back();
	}
}