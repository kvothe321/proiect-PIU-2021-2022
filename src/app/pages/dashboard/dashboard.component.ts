import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  @Output("goToProfile") goToProfile = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public showProfile(): void{
    this.goToProfile.emit('');
  }
}
