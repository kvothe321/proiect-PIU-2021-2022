import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
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
