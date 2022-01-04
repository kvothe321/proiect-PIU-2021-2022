import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.sass']
})
export class PhoneComponent implements OnInit {
  public isClosed = true;
  public isOnLogin = false;
  public isOnRegister = false;
  public isOnWelcome = true;
  public isOnDashboard = false;
  public isOnProfile = false;

  constructor() { }

  ngOnInit(): void {
  }

  public hideAllPages(): void{
    this.isOnWelcome = false;
    this.isOnLogin = false;
    this.isOnRegister = false;
    this.isOnDashboard = false;
    this.isOnProfile = false;
  }

  public openPhone(): void{
    this.isClosed = false;
  }

  public goToWelcome(): void{
    this.hideAllPages();
    this.isOnWelcome = true;
  }

  public goToRegister(): void{
    this.hideAllPages();
    this.isOnRegister = true;
  }

  public goToLogin(): void{
    this.hideAllPages();
    this.isOnLogin = true;
  }

  public goToDashboard(): void{
    this.hideAllPages();
    this.isOnDashboard = true;
  }

  public goToProfile(): void{
    this.hideAllPages();
    this.isOnProfile = true;
  }

}
