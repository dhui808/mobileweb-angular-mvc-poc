import AccountDetailsViewModel from './AccountDetailsViewModel'
import EventHandler from '../../../base/EventHandler'

export default class DetailsController extends EventHandler {

	detailsMain: any
	accountDetailsViewModel: AccountDetailsViewModel
	accountDetailsOnly: boolean
	
	constructor(detailsMain) {
		super();
		this.detailsMain = detailsMain
		this.accountDetailsViewModel = new AccountDetailsViewModel();
	}
	
	loadAccount = (accountKey) => {
	    this.executeSubmit('ACCOUNT_DETAILS', {accountKey:accountKey}, null);
	}
	
	onSubmitSuccess(result): void {
		console.log('Account details load success.'+result.response.account.accountKey);
		this.accountDetailsViewModel.setAccount(result.response.account);
		// this.detailsMain.setState({account : this.accountDetailsViewModel});
		
		if (this.detailsMain.accountKey) {
			// details only view. need to force handleResize
			this.handleResize();
		}
	}
	
	panelDetails = () => {
		this.changeTab('tabDetails','panelDetails', this.detailsMain)
	}
	
	panelActivity = () => {
		this.changeTab('tabActivity', 'panelActivity', this.detailsMain)
	}
	
	getOriginatingPage(): any {
		return this.detailsMain.accountsMain;
	}
}
