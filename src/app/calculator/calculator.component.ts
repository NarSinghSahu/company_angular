import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
private a : Number = 0;
private b : Number = 0;
private c : Number = 0;
  constructor() { }

  ngOnInit() {
  }

  addNo(){
    
    this.c = parseInt(this.a.toString()) + parseInt(this.b.toString());
  }


}
