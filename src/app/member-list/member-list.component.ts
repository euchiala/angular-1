import { Component } from '@angular/core';
import { Member } from 'src/model/Member';
import { GLOBAL } from '../app-config';

const ELEMENT_DATA: Member[] = GLOBAL._DB.members;

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberListComponent {
  displayedColumns: string[] = ['ID', 'Cin', 'Name', 'CV','DateCreation','Type','actionUpdate'];
  dataSource = ELEMENT_DATA;

}
