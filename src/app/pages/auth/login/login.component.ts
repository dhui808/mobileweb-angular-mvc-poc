import { Component, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import PageBase from '../../../base/PageBase'
import BankingBase from '../../../base/BankingBase'
import ViewModelBase from '../../../base/ViewModelBase'
import LoginController from './LoginController'
import LoginViewModel from './LoginViewModel'
import { NotificationBarComponent } from '../../../components//notification-bar/notification-bar.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends PageBase implements OnInit {
  @ViewChild(NotificationBarComponent) notificationBar: NotificationBarComponent
  
  controller: LoginController;	
  viewModel: LoginViewModel;
  
  constructor(public router: Router) {
    super();
	this.controller = new LoginController(this)
	this.viewModel = this.controller.loginViewModel;
  }

  ngOnInit() {
     this.doTranslation()
  }

  getViewModel(): ViewModelBase {
    return this.controller.loginViewModel;
  }
}
