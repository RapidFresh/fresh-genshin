import { DetailPageService } from './../../../services/detail-page.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-container',
  templateUrl: './detail-container.component.html',
  styleUrls: ['./detail-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailContainerComponent implements OnInit {
  detailPage$ = this.detailPageService.currentDetailPage$;

  constructor(private detailPageService: DetailPageService) {}

  ngOnInit(): void {}
}
