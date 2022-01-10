import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-report-issue',
  templateUrl: './report-issue.component.html',
  styleUrls: ['./report-issue.component.sass']
})
export class ReportIssueComponent implements OnInit {
  @Output("goToDashboard") goToDashboard = new EventEmitter(); 

  public savedSuccessfully: boolean = false;
  public documentUploaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public showDashboard(): void{
    this.goToDashboard.emit('');
  }

  public saveChanges(): void{
    this.savedSuccessfully = true;
  }

  public handleFileInput(): void{

  }
}
