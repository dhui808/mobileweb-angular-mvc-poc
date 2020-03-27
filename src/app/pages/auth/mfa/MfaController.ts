import MfaViewModel from './MfaViewModel'
import EventHandler from '../../../base/EventHandler'
import BankingBase from '../../../base/BankingBase'

export default class MfaController extends EventHandler {

	mfa: any;
	params: any;
	mfaViewModel: MfaViewModel;
	
	constructor(mfa) {
		super();
		this.mfa= mfa;
		this.mfaViewModel = new MfaViewModel();
	}
	
	handleAnswerChange = (value) => {
		this.mfaViewModel.answer = value;
		console.log("this.mfaViewModel.answer=" + this.mfaViewModel.answer);
	}
	
	handleSubmit = () => {
	    var params = {question:this.mfaViewModel.question, answer:this.mfaViewModel.answer}
	    this.executeSubmit('MFA', params, null)
	}
	
	onLoadSuccess = (result) => {
		console.log("MFA load success.")
		
		//trigger resize event to make sure account page displayed properly
		this.handleResize();
	}
	
	onSubmitSuccess(result: any): void {
		console.log("MFA success.")
		BankingBase.navigation.navigateTo("ACCOUNT_SUMMARY", this.mfa, null, null)
	}
	
	getOriginatingPage(): any {
		return this.mfa;
	}
}