import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.sass']
})
export class ReportsListComponent implements OnInit {
  @Output("goToDashboard") goToDashboard = new EventEmitter();

  public MYREPORTS = [
    {"id": 1, "title": "Titlu 1", "start_date": "2021-13-12 16:54", "status": "În lucru", "statusId": 1, "description": "Some dummy description"},
    {"id": 2, "title": "Titlu 2", "start_date": "2021-13-12 16:54", "status": "Preluată", "statusId": 2, "description": "Some dummy description"},
    {"id": 3, "title": "Titlu 3", "start_date": "2021-13-12 16:54", "status": "Finalizată", "statusId": 3, "description": "Some dummy description"},
    {"id": 4, "title": "Titlu 4", "start_date": "2021-13-12 16:54", "status": "În lucru", "statusId": 1, "description": "Some dummy description"},
    {"id": 5, "title": "Titlu 5", "start_date": "2021-13-12 16:54", "status": "În lucru", "statusId": 1, "description": "Some dummy description"},
    {"id": 6, "title": "Titlu 6", "start_date": "2021-13-12 16:54", "status": "În lucru", "statusId": 1, "description": "Some dummy description"},
    {"id": 7, "title": "Titlu 7", "start_date": "2021-13-12 16:54", "status": "În lucru", "statusId": 1, "description": "Some dummy description"},
  ]


  public REPORTS = [
    {"id": 1, "title": "Titlu 1", "start_date": "2021-13-12 16:54", "status": "Finalizată", "statusId": 3, "description": "Some dummy description"},
    {"id": 2, "title": "Titlu 2", "start_date": "2021-13-12 16:54", "status": "Preluată", "statusId": 2, "description": "Some dummy description"},
    {"id": 3, "title": "Titlu 3", "start_date": "2021-13-12 16:54", "status": "Finalizată", "statusId": 3, "description": "Some dummy description"},
  ]

  public isOnMyReports: boolean = true;
  public isOnReports: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  public handleChange(): void{
    this.isOnMyReports = !this.isOnMyReports;
    this.isOnReports = !this.isOnReports;
  }

  public showDashboard(): void{
    this.goToDashboard.emit('');
  }

}
