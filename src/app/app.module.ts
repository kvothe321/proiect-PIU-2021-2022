import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { PhoneComponent } from './phone/phone.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RegisterComponent } from './pages/register/register.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/menu/profile/profile.component';
import { NotificationsComponent } from './pages/menu/notifications/notifications.component';
import { ReportIssueComponent } from './pages/menu/report-issue/report-issue.component';
import { ReportsListComponent } from './pages/menu/reports-list/reports-list.component';
import { ComunityProjectsComponent } from './pages/menu/comunity-projects/comunity-projects.component';
import { AwardsComponent } from './pages/menu/awards/awards.component';
import { AboutComponent } from './pages/menu/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    DashboardComponent,
    ProfileComponent,
    NotificationsComponent,
    ReportIssueComponent,
    ReportsListComponent,
    ComunityProjectsComponent,
    AwardsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
