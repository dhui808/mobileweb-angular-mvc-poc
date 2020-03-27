import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/auth/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { NotificationBarComponent } from './components/notification-bar/notification-bar.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { SummaryComponent } from './pages/accounts/summary/summary.component';
import { DetailsComponent } from './pages/accounts/details/details.component';
import { LogoutComponent } from './pages/auth/logout/logout.component';
import { AccountDetailsComponent } from './pages/accounts/account-details/account-details.component';
import { MfaComponent } from './pages/auth/mfa/mfa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    TitleBarComponent,
    LoadingBarComponent,
    NotificationBarComponent,
    UnderConstructionComponent,
    AccountsComponent,
    SummaryComponent,
    DetailsComponent,
    LogoutComponent,
    AccountDetailsComponent,
    MfaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
