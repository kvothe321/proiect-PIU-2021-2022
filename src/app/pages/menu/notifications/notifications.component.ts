import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.sass']
})
export class NotificationsComponent implements OnInit {
  @Output("goToDashboard") goToDashboard = new EventEmitter();


  public NOTIFICATIONS: any = [
    {"id": "Banca stricata", "status": "În aşteptare", "statusId": 1, "details": "Adresa: Cluj-Napoca, Parcul Central langa Chios\nSunt distruse 4 banci, oamenii nu au unde sa stea.", "data_preluarii": "2021-12-13 10:26"},
    {"id": "Topogan ruginit", "status": "Preluat", "statusId": 2, "details": "Adresa: Cluj-Napoca, Manastur, Aleea Peana, parc\nCopiii nu pot utiliza topoganul datorita ruginii de pe el.", "data_preluarii": "2021-12-13 10:26"},
    {"id": "Hinta rupta", "status": "În aşteptare", "statusId": 1, "details": "Some details", "data_preluarii": "2021-12-13 10:26"},
    {"id": "Geam spart magazin", "status": "Finalizat", "statusId": 3, "details": "Some details", "data_preluarii": "2021-12-13 10:26"},
    {"id": "Groapa asfalt", "status": "În aşteptare", "statusId": 1, "details": "Some details", "data_preluarii": "2021-12-13 10:26"},
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
