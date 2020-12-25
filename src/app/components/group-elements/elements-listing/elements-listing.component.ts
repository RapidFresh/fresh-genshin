import { DetailPageService } from './../../../services/detail-page.service';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Elements, ElementsService } from '../../../services/elements.service';

@Component({
  selector: 'app-elements-listing',
  templateUrl: './elements-listing.component.html',
  styleUrls: ['./elements-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ElementsService],
})
export class ElementsListingComponent implements OnInit, OnDestroy {
  constructor(
    private elementsService: ElementsService,
    private detailPageService: DetailPageService
  ) {}

  elements = this.elementsService.elements;
  activeElement: Elements;

  ngOnInit(): void {}

  selectElement(element) {
    this.activeElement = element;

    const detailPage = {
      page: 'elements',
      data: {
        element,
      },
    };

    this.detailPageService.setDetailPage(detailPage);
  }

  ngOnDestroy(): void {
    this.detailPageService.clearDetailPage();
  }
}
