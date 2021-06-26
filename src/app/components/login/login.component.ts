import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { GlobalStoreService } from '../../service/global-store.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router,
    private _GlobalStoreService: GlobalStoreService) { }

  ngOnInit() {
  }

  onSubmitForm(loginForm) {
    console.log(loginForm);
    if (loginForm.form.invalid) {
      return;
    }
    localStorage.isUserLoggedIn = true;
    this._GlobalStoreService.set('isUserLoggedIn', true);
    this.route.navigate(['/home/blog/list']);
  }

}
