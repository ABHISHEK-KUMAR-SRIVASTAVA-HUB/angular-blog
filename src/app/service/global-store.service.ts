import { Injectable } from '@angular/core';

@Injectable()
export class GlobalStoreService {
  store: {};

  constructor() {
    this.store = {};
  }

  get(key) {
    return this.store[key];
  }

  set(key, value) {
    this.store[key] = value;
  }

}
