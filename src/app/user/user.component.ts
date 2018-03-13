import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  jsData : any;
  constructor(public http:Http) { }

  ngOnInit() {
    this.http.get('http://www.json-generator.com/api/json/get/cpSLulCSgi?indent=2').subscribe(data => {
      console.log(data);
      this.jsData = data;

    },
   (error) =>{
     console.log("Error retriving data ...............");
   }
  
  );
  }


}
