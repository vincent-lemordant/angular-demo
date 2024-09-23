import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, shareReplay, type Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
// Inspired by : https://stackoverflow.com/a/62500440/6415516
export class UserService {
  private readonly API_URL = 'https://gorest.co.in/public/v2/users';
  private data$: Observable<User[]> = of([]);

  constructor(public readonly httpClient: HttpClient) {}

  // Perform HTTP call to retrieve users.
  public fetchUsersFromApi(): Observable<User[]> {
    this.data$ = this.httpClient.get<User[]>(this.API_URL).pipe(shareReplay(1));
    return this.data$;
  }

  // Return previously fetched users.
  public getUsers(): Observable<User[]> {
    return this.data$;
  }
}
