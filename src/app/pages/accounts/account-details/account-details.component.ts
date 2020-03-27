import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import PageBase from '../../../base/PageBase'
import BankingBase from '../../../base/BankingBase'
import ViewModelBase from '../../../base/ViewModelBase'

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent extends PageBase implements OnInit {

  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
  }

  getViewModel(): ViewModelBase {
    return null;
  }
}
