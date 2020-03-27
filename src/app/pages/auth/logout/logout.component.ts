import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import EventHandler from '../../../base/EventHandler'
import BankingBase from '../../../base/BankingBase'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  controller: LogoutController
	
  constructor(public router: Router) { }

  ngOnInit() {
	  this.controller = new LogoutController(this);
	  this.controller.handleLogout();
  }

}

class LogoutController extends EventHandler {
	
	logout: any
	
	constructor(logout) {
		super()
		this.logout= logout;
	}
	
	handleLogout = () => {
		this.executeSubmit('LOGOUT', null, null);
	}
	
	getOriginatingPage(): any {
		return this.logout;
	}
	
	onSubmitSuccess(result: any): void {
		// not actually called. added this method to satisfy the compiler.
	}
}
