import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class BlogApiService {

  constructor(private _apiService: ApiService) { }

  getBlogList() {
    return this._apiService.get('../../assets/sample-data/blog-list.json');
  }

}
