import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comunity-projects',
  templateUrl: './comunity-projects.component.html',
  styleUrls: ['./comunity-projects.component.sass']
})
export class ComunityProjectsComponent implements OnInit {
  @Output("goToDashboard") goToDashboard = new EventEmitter();

  public PROJECTS: any = [
    {"id": 1, "title": "Crearea de spatii verzi", "description": "Se vor planta 36.000 copaci pana in anul 2026 ", "is_liked": false},
    {"id": 2, "title": "Vinerea verde", "description": "Vinerea vei avea gratuitate la calatoriile cu autobuzul", "is_liked": false},
    {"id": 3, "title": "ColorRun", "description": "Participantii vor  alerga pentru o cauza, fiecare participant poate strange puncte pentru cauza sa", "is_liked": false},
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
