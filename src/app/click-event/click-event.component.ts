import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-event',
  templateUrl: './click-event.component.html',
  styleUrls: ['./click-event.component.css']
})
export class ClickEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickMeEvent() {
    alert("click event call")
  }

  addition(a, b) {

    alert(a + b)
  }

}
