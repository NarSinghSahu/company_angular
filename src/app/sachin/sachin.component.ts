import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sachin',
  templateUrl: './sachin.component.html',
  styleUrls: ['./sachin.component.css']
})
export class SachinComponent implements OnInit {
private id : Number = 1;
private first_name : String = "sachin";
private last_name : String = "Tendulkar";
private age : Number = 42;
private odi : Number = 550;
private img : String = "http://p.imgci.com/db/PICTURES/CMS/128400/128483.1.jpg";
  constructor() { }

  ngOnInit() {
  }

}
