import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = "Learn Interpolation"
  a:number = 10;
  b:number = 20;

  obj = {
    name : 'Gajanan Desai',
    email: 'gajanandesai97@gmail.com'
  }

  arrayTest = [10,20,30,'stringValue']
}
