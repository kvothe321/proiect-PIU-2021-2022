import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {
  @Output("goToRegister") goToRegister = new EventEmitter();
  @Output("goToLogin") goToLogin = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public showLogin(): void{
    this.goToLogin.emit('');
  }

  public showRegister(): void{
    this.goToRegister.emit('');
  }

}
