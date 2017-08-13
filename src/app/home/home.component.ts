import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: string = "geraldine bacang";
  position: string = "robot application developer   |   frontend developer"

  constructor() { }

  ngOnInit() {
  }

}
