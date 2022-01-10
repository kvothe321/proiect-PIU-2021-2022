import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.sass']
})
export class NotificationsComponent implements OnInit {
  @Output("goToDashboard") goToDashboard = new EventEmitter();


  public NOTIFICATIONS: any = [
    {"id": 1, "status": "În aşteptarea preluării", "statusId": 1, "details": "Some details", "data_preluarii": "2021-12-13 10:26"},
    {"id": 2, "status": "Preluat", "statusId": 2, "details": "Some details", "data_preluarii": "2021-12-13 10:26"},
    {"id": 3, "status": "În aşteptarea preluării", "statusId": 1, "details": "Some details", "data_preluarii": "2021-12-13 10:26"},
    {"id": 4, "status": "Finalizat", "statusId": 3, "details": "Some details", "data_preluarii": "2021-12-13 10:26"},
    {"id": 5, "status": "În aşteptarea preluării", "statusId": 1, "details": "Some details", "data_preluarii": "2021-12-13 10:26"},
  ]

  public showNotificationFlag: boolean = false;

  public notificationTitle = "Title";
  public notificationDetails = "Details";
  public notificationFinishedDate = "0000-00-00";
  public notificationIndex = 0;
  public notificationStatus = 1;

  public isTaken: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  public showNotifications(): void{
    this.showNotificationFlag = false;
  }

  public showNotificationDetails(title:any , details:any , date:any, index: any): void{
    this.notificationTitle = title;
    this.notificationDetails = details;
    this.notificationFinishedDate = date;
    this.notificationIndex = index
    this.showNotificationFlag = true;
    this.notificationStatus = this.NOTIFICATIONS[this.notificationIndex].statusId;
  }

  public showDashboard(): void{
    this.goToDashboard.emit('');
  }

  public takeNotification(): void{
    this.NOTIFICATIONS[this.notificationIndex].statusId = 2;
    this.notificationStatus = 2;
    this.NOTIFICATIONS[this.notificationIndex].status = "Preluat";
    this.notificationFinishedDate = new Date().toUTCString();
    this.NOTIFICATIONS[this.notificationIndex].data_preluarii = this.notificationFinishedDate;
  }
  

}
