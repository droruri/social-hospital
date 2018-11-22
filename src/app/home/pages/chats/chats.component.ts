import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {UserDetailsModalComponent} from '../../modals/user-details-modal/user-details-modal.component';

@Component({
  selector: 'chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  names:string[] =
    [
      "אבי אבי",
      "אבי אבי",
      "אבי אבי",
      "אבי אבי",
      "אבי אבי",
      "אבי אבי",
      "אבי אבי",
      "אבי אבי",
      "אבי אבי",
      "אבי אבי",
      "אבי אבי",
      "אבי אבי",
      "אבי אבי",
      "אבי אבי",
      "אבי אבי",
      "אבי אבי",
      "אבי אבי",
      "אבי אבי",
      "אבי אבי",
      "אבי אבי",
      "אבי אבי",
      "אבי אבי",
    ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(name:string): void {
    const dialogRef = this.dialog.open(UserDetailsModalComponent, {
      direction: 'rtl',
      width:'95vw',
      height:'90vh',
      data: {name: name}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }


}
