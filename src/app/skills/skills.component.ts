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
  options = { tooltips: { enabled: false } };
  colors: any[] = [
    { backgroundColor: ["#666666", "#843284", "#ff1974"],
      borderColor: ['#000000', '#000000', '#000000'],
      borderWidth: ['10', '10', '10']
    }
  ];
  skills: any[] = [
    {
      "name": "Angular 4",
      "percentage": "75%",
      "backgroundColor": "tomato"
    },
    {
      "name": "Python",
      "percentage": "70%",
      "backgroundColor": "#20b2aa"
    },
    {
      "name": "Git",
      "percentage": "60%",
      "backgroundColor": "#843284"
    },
    {
      "name": "C#",
      "percentage": "40%",
      "backgroundColor": "#ff1974"
    },
    {
      "name": "Choregraphe",
      "percentage": "90%",
      "backgroundColor": "#ffff01"
    },
    {
      "name": "Adobe Illustrator, Photoshop, Experience Design",
      "percentage": "65%",
      "backgroundColor": "#ffb401"
    },
    {
      "name": "Firebase",
      "percentage": "30%",
      "backgroundColor": "#72160c"
    },
    {
      "name": "Atom, Sublime, Visual Studio Code",
      "percentage": "85%",
      "backgroundColor": "#296469"
    }
  ];


  constructor() { }

  ngOnInit() {

  }

}
