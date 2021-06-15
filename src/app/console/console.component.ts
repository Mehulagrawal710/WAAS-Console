import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from '../cookie.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  name!:string;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
    ) { }

  ngOnInit(): void {
    this.sayHello();
  }

  sayHello(){
    let token:string = "Bearer " + this.cookieService.getCookie("WaasToken");
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", token);
    let obs = this.http.get('http://localhost:8080/hello', {headers:headers, responseType:"text"});
    obs.subscribe((response) => {
        this.name = response;
    });
  }

}
