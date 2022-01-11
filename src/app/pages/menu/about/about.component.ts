import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  @Output("goToDashboard") goToDashboard = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public showDashboard(): void{
    this.goToDashboard.emit('');
  }

}
