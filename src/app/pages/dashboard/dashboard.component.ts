import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  @Output("goToProfile") goToProfile = new EventEmitter();
  @Output("goToRaportareSesizare") goToRaportareSesizare = new EventEmitter();
  @Output("goToNotifications") goToNotifications = new EventEmitter();
  @Output("goToReports") goToReports = new EventEmitter();
  @Output("goToCommunityProjects") goToCommunityProjects = new EventEmitter();
  @Output("goToAwards") goToAwards = new EventEmitter();
  @Output("goToAbout") goToAbout = new EventEmitter();

  public REPORTS = [
    {"id": 1, "title": "Titlu 1", "start_date": "2021-13-12 16:54", "status": "Finalizată", "statusId": 3, "description": "Some dummy description"},
    {"id": 2, "title": "Titlu 2", "start_date": "2021-13-12 16:54", "status": "Preluată", "statusId": 2, "description": "Some dummy description"},
    {"id": 3, "title": "Titlu 3", "start_date": "2021-13-12 16:54", "status": "Finalizată", "statusId": 3, "description": "Some dummy description"},
    {"id": 3, "title": "Titlu 3", "start_date": "2021-13-12 16:54", "status": "Finalizată", "statusId": 3, "description": "Some dummy description"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public showProfile(): void{
    this.goToProfile.emit('');
  }

  public showRaportareSesizare(): void{
    this.goToRaportareSesizare.emit('');
  }

  public showNotifications(): void{
    this.goToNotifications.emit('');
  }

  public showReports(): void{
    this.goToReports.emit('');
  }

  public showCommunityProjects(): void{
    this.goToCommunityProjects.emit('');
  }

  public showAbout(): void{
    this.goToAbout.emit('');
  }

  public showAwards(): void{
    this.goToAwards.emit('');
  }
}
