import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.sass']
})
export class AwardsComponent implements OnInit {
  @Output("goToDashboard") goToDashboard = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  public showDashboard(): void{
    this.goToDashboard.emit('');
  }

}
