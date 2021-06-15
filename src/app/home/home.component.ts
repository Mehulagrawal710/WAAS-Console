import { AlertService } from './../alert.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  response:any;
  

  constructor(private http: HttpClient, private alertService:AlertService){
    
  }

  ngOnInit(): void {
  }

  test(){
    this.alertService.alert("hello error has come", "warning");
  }

}
