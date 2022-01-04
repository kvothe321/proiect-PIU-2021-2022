import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  @Output("goToWelcome") goToWelcome = new EventEmitter();
  @Output("goToDashboard") goToDashboard = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public goBack(): void{
    this.goToWelcome.emit('');
  }

  public showDashboard(): void{
    this.goToDashboard.emit('');
  }
}
