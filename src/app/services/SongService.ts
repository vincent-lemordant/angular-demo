/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import type { Song } from '../models/Song';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
@Injectable({
  providedIn: 'root',
})
export class SongService {
  constructor(public readonly http: HttpClient) {}
  /**
   * @returns Song OK
   * @throws ApiError
   */
  public getSongs(): Observable<Array<Song>> {
    return __request(OpenAPI, this.http, {
      method: 'GET',
      url: '/users',
    });
  }
}
