import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-main-container',
  templateUrl: './project-main-container.component.html',
  styleUrls: ['./project-main-container.component.css']
})
export class ProjectMainContainerComponent implements OnInit {

  projects = [
    {
      name: "Project N1",
      date: "06/01/2020",
      tasks: 2,
      subtasks: 3
    },
    {
      name: "Project N2",
      date: "14/12/2019",
      tasks: 4,
      subtasks: 5
    },
    {
      name: "Project N3",
      date: "04/02/2020",
      tasks: 1,
      subtasks: 8
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
