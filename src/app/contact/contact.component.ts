import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  position = ["10.3157", "123.8854"];
  constructor() { }

  ngOnInit() {
  }

}
