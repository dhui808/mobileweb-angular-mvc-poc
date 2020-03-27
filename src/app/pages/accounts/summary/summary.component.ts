import { Component, OnInit, Input } from '@angular/core';
import PageBase from '../../../base/PageBase'
import BankingBase from '../../../base/BankingBase'
import ViewModelBase from '../../../base/ViewModelBase'
import SummaryController from './SummaryController'
import AccountSummaryViewModel from './AccountSummaryViewModel'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent extends PageBase implements OnInit {

	@Input()	accountsMain: any
	controller: SummaryController
	viewModel: AccountSummaryViewModel
	
	constructor() {
		super()
	}
	
	ngOnInit() {
		this.controller = new SummaryController(this)
		this.viewModel = this.controller.viewModel
		 this.doTranslation()
		this.controller.loadAccounts();
	}

    getViewModel(): ViewModelBase {
	    return this.viewModel
	}
}
