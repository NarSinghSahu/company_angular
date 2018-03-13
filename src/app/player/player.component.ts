import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  firstname:string;
  lastname:String;
  sports:string;
  age:number;
  odi:number;
  picUrl:string;
  country:string;
  constructor() { }

  ngOnInit() {
  }

}
