import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {

  a:number=0;
  b:number=0;
  c:number=0;
  area:number=0;
  
  constructor() { }

  ngOnInit() {
  }

  findArea(){
    /*
    let side = parseInt(this.a.toString())+parseInt(this.b.toString())+parseInt(this.c.toString());
    this.area =  Math.sqrt((side-parseInt(this.a.toString())) + (side- parseInt(this.b.toString())) + (side -parseInt( this.c.toString())));
  */

  let side =this.a+this.b+this.c;
  this.area =  Math.sqrt((side-this.a) + (side-this.b) + (side - this.c));
  }
}
