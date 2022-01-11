import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comunity-projects',
  templateUrl: './comunity-projects.component.html',
  styleUrls: ['./comunity-projects.component.sass']
})
export class ComunityProjectsComponent implements OnInit {
  @Output("goToDashboard") goToDashboard = new EventEmitter();

  public PROJECTS: any = [
    {"id": 1, "title": "Titlu 1", "description": "descriere", "is_liked": false},
    {"id": 2, "title": "Titlu 2", "description": "descriere", "is_liked": false},
    {"id": 3, "title": "Titlu 3", "description": "descriere", "is_liked": false},
    {"id": 4, "title": "Titlu 4", "description": "descriere", "is_liked": false},
    {"id": 5, "title": "Titlu 5", "description": "descriere", "is_liked": false},
    {"id": 6, "title": "Titlu 6", "description": "descriere", "is_liked": false},
  ]

  public likeTest: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }


  public showDashboard(): void{
    this.goToDashboard.emit('');
  }

  public doLike(index: number): void{
    this.PROJECTS[index].is_liked = !this.PROJECTS[index].is_liked;
  }
}
