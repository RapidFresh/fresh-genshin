import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailPageService {
  currentDetailPage$ = new BehaviorSubject<DetailPage>(null);

  constructor() {}

  setDetailPage(page: DetailPage) {
    this.currentDetailPage$.next(page);
  }

  clearDetailPage() {
    this.currentDetailPage$.next(null);
  }
}

export interface DetailPage {
  page: string;
  data: any;
}
