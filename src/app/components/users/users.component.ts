import { Component, QueryList, ViewChildren } from '@angular/core';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import {
  NgbdSortableHeader,
  SortEvent,
} from './../../directives/sortable.directive';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: User[] = [];

  // Header sorting inspired by : https://ng-bootstrap.github.io/releases/14.x/#/components/table/examples#sortable
  @ViewChildren(NgbdSortableHeader) headers:
    | QueryList<NgbdSortableHeader>
    | undefined;

  constructor(userService: UserService) {
    userService.getUsers().subscribe((result) => (this.users = result));
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    for (const header of this.headers!) {
      if (header.sortable !== column) {
        header.direction = '';
      }
    }

    if (direction !== '' && column !== '') {
      this.users = [...this.users].sort((a, b) => {
        const res = this.compare(a[column] as any, b[column] as any);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  compare = (v1: string | number, v2: string | number) =>
    v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}
