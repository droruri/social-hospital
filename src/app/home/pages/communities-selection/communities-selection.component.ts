import { Component, OnInit } from '@angular/core';
import {Community} from '../../../core/models/community';

@Component({
  selector: 'communities-selection',
  templateUrl: './communities-selection.component.html',
  styleUrls: ['./communities-selection.component.scss']
})
export class CommunitiesSelectionComponent implements OnInit {

  communityDescription:string;

  communities:Community[]=
    [
      {name:'מחלקת דם', isUserInCommunity: false},
      {name:'מחלקת בעיות לב', isUserInCommunity: false},
      {name:'מחלקת סרטן', isUserInCommunity: false},
      {name:'מחלקת אסתמה', isUserInCommunity: false},
      {name:'מחלקת אסתמה', isUserInCommunity: false},
      {name:'מחלקת אסתמה', isUserInCommunity: false},
      {name:'מחלקת אסתמה', isUserInCommunity: false},
      {name:'מחלקת אסתמה', isUserInCommunity: false},
      {name:'מחלקת אסתמה', isUserInCommunity: false},
      {name:'מחלקת אסתמה', isUserInCommunity: false},
      {name:'מחלקת אסתמה', isUserInCommunity: false},
      {name:'מחלקת אסתמה', isUserInCommunity: false},
      {name:'מחלקת אסתמה', isUserInCommunity: false},
      {name:'מחלקת אסתמה', isUserInCommunity: false},
      {name:'מחלקת אסתמה', isUserInCommunity: false},
      {name:'מחלקת אסתמה', isUserInCommunity: false},
    ];

  constructor() { }

  ngOnInit() {
  }

}
