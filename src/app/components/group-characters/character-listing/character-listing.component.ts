import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GenshinApiService } from '../../../services/genshin-api.service';
import { pipe } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-character-listing',
  templateUrl: './character-listing.component.html',
  styleUrls: ['./character-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GenshinApiService],
})
export class CharacterListingComponent implements OnInit {
  constructor(private genshinApiService: GenshinApiService) {}

  characters$ = this.genshinApiService.getListCharacters$;

  profileImages$ = this.genshinApiService.getListProfileImages$;

  ngOnInit(): void {}
}
