import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  @Output("goToDashboard") goToDashboard = new EventEmitter();
  @Output("goToWelcome") goToWelcome = new EventEmitter();

  public isEditingName: boolean = true;
  public isEditingPrenume: boolean = true;
  public isEditingEmail: boolean = true;
  public documentUploaded: boolean = false;
  public savedSuccessfully: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public editName(): void{
    this.isEditingName = !this.isEditingName;
  }

  public editPrenume(): void{
    this.isEditingPrenume = !this.isEditingPrenume;
  }

  public editEmail(): void{
    this.isEditingEmail = !this.isEditingEmail;
  }

  public handleFileInput(): void{
    this.documentUploaded = true;
  }

  public saveChanges(): void{
    this.savedSuccessfully = true;
  }

  public showDashboard(): void{
    this.goToDashboard.emit('');
  }

  public signOut(): void{
    this.goToWelcome.emit('')
  }
}
