import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  students: any[] = [{name: "Pippo", city: "Topolinia", gender: "M", present: true},
                    {name: "Pluto", city: "Topolinia", gender: "M", present: false},
                    {name: "Paperina", city: "Paperopoli", gender: "F", present: true},
                    {name: "Gastone", city: "Paperopoli", gender: "M", present: true},
                    {name: "Minnie", city: "Topolinia", gender: "F", present: false}
  ];
}
