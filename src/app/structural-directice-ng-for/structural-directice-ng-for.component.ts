import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directice-ng-for',
  templateUrl: './structural-directice-ng-for.component.html',
  styleUrls: ['./structural-directice-ng-for.component.css']
})
export class StructuralDirecticeNgForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  color = ["red", "Yellow", "Black", "Blue"]

  userData = [
    {
      name: "Gajanan",
      email: "gajanandesai97@gmail.com"
    },
    {
      name: "Karthik",
      email: "karthik@gmail.com"
    },
    {
      name: "Vishal",
      email: "vishal@gmail.com"
    }
  ]
}
