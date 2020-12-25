import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Elements, ElementsService } from '../../../services/elements.service';

@Component({
  selector: 'app-elements-detail',
  templateUrl: './elements-detail.component.html',
  styleUrls: ['./elements-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ElementsService],
})
export class ElementsDetailComponent implements OnInit {
  @Input() data;

  element: Elements;

  constructor(private elementsService: ElementsService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.element = this.elementsService.elementsFull.find(
        (v) => v.label === changes.data.currentValue.element.label
      );
    }
  }
}
