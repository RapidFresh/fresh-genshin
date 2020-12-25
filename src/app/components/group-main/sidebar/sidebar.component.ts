import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  navbarEntryes: NavbarEntryes[] = [
    {
      label: 'Characters',
      icon: 'char.png',
      url: '/characters',
    },
    {
      label: 'Elements',
      icon: 'alchemy.png',
      url: '/elements',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

export interface NavbarEntryes {
  url?: string;
  label: string;
  icon?: string;
  matIcon?: string;
}
