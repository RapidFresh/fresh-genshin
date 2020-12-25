import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Elements } from 'src/app/services/elements.service';

@Component({
  selector: 'app-element-card',
  templateUrl: './element-card.component.html',
  styleUrls: ['./element-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElementCardComponent implements OnInit {
  @Input() element: Elements;

  constructor() {}

  ngOnInit(): void {}
}
