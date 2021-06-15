import { AlertService } from './../alert.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { restUrl } from './../restservice';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpClient, private alertService: AlertService) { }

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl()
  });

  signup(){
    const body = {
      username: this.userForm.controls['username'].value,
      password: this.userForm.controls['password'].value,
      email: this.userForm.controls['email'].value
    };
    let obs = this.http.post<any>(restUrl+'register', body);
    obs.subscribe(
      (response) => {
        this.alertService.alert("Signup Successful! You can Login now", "success");
      },
      (error) => {
        this.alertService.alert(error.error.message, "danger");
      }
    );
  }


}
