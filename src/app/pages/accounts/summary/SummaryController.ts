import EventHandler from '../../../base/EventHandler'
import AccountSummaryViewModel from './AccountSummaryViewModel'

export default class SummaryController extends EventHandler {

	summaryMain: any
	accountsMain: any
	viewModel: AccountSummaryViewModel
	accountSummarySections: any[]
	currentAccountView: any
		
	constructor(summaryMain) {
		super();
		this.summaryMain = summaryMain;
		this.viewModel = new AccountSummaryViewModel()
	}
	
	loadAccounts = () => {
		this.executeSubmit('ACCOUNT_SUMMARY', null, null);
	}
	
	onSubmitSuccess(result: any): void {
		console.log('Accounts load success.')

		this.viewModel.setResponseAccountsAndController(result.response.accounts, this);
		let accountSummarySections = this.viewModel.accountSummarySections;
		
		// keep track of the currently selected account view.
		this.currentAccountView = this.viewModel.getInitialAccountView();
		
		// update view
		// this.summaryMain.setState({accountSummarySections : accountSummarySections});
		this.summaryMain.accountsMain.select(this.currentAccountView.key, this.isWideView(), true);
		
		// force resize event to initialize certain states.
		this.handleResize();
	}
	
	select = (view) => {
		this.currentAccountView.deselect();
		this.currentAccountView = view;
		// this.summaryMain.setState(this.summaryMain.state);
		this.summaryMain.accountsMain.select(this.currentAccountView.key, this.isWideView(), false);
	}
	
	getOriginatingPage(): any {
		return this.summaryMain;
	}
}
