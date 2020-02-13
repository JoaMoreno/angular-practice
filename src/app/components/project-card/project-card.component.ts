import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  project = {

    title: "Task App Design",
    created_At: "06/01/2019",
    numeroTask: 2,
    numeroSubTask: 3

  }

  constructor() { }

  ngOnInit() {
  }

}
