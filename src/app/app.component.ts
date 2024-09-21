import {
  Component,
  Directive,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';

import { SongService } from './services/SongService';
import { Song } from './models/Song';
import { OpenAPI } from './core/OpenAPI';
import { NgbdSortableHeader, SortEvent } from './directives/sortable.directive';

OpenAPI.BASE = 'https://gorest.co.in/public/v2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';
  songs: Song[] = [];

  @ViewChildren(NgbdSortableHeader) headers:
    | QueryList<NgbdSortableHeader>
    | undefined;

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    for (const header of this.headers!) {
      if (header.sortable !== column) {
        header.direction = '';
      }
    }

    // sorting countries
    if (direction === '' || column === '') {
    } else {
      this.songs = [...this.songs].sort((a, b) => {
        const res = this.compare(a[column] as any, b[column] as any);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  constructor(private songService: SongService) {
    songService.getSongs().subscribe((result) => (this.songs = result));
  }

  compare = (v1: string | number, v2: string | number) =>
    v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}
