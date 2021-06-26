import { Injectable } from '@angular/core';
import { GlobalStoreService } from './global-store.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate  {

  constructor(
    private _GlobalStoreService: GlobalStoreService,
    public router: Router
  ) {

  }

  canActivate(): boolean {
    if (!this._GlobalStoreService.get('isUserLoggedIn')) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
