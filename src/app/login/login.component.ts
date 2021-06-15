import { restUrl } from './../restservice';
import { CookieService } from './../cookie.service';
import { FormControl, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router:Router
    )
  { 

  }

  userForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  ngOnInit(): void {
  }

  login(){
    const body = {
      username: this.userForm.controls['username'].value,
      password: this.userForm.controls['password'].value
    };
    let obs = this.http.post<any>(restUrl+'authenticate', body);
    obs.subscribe((response) => {
        console.log("token: " + response.token);
        this.cookieService.setCookie("WaasToken", response.token, 1);
        this.router.navigate(['/console']);
    });
  }

}
