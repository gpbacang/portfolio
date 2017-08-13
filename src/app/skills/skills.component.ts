import { Component, OnInit } from '@angular/core';
import { ChartsModule, Color } from 'ng2-charts';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  labels: string[] = ['HTML/CSS/SASS', 'JavaScript/JQuery/ES6/TypeScript', 'PHP/MySQL'];
  data: number[] = [100, 100, 50];
  type: string = 'doughnut';
  colors: any[] = [
    { backgroundColor: ["#666666", "#843284", "#ff1974"],
      borderColor: ['#000000', '#000000', '#000000'],
      borderWidth: ['10', '10', '10']
    }
  ];
  options = { tooltips: { enabled: false } };

  constructor() { }

  ngOnInit() {
    
  }

}
