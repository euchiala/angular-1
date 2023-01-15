import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/model/Member';
import { GLOBAL } from '../app-config';
import { MemberServiceService } from '../member-service.service';

const ELEMENT_DATA: Member[] = GLOBAL._DB.members;

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberListComponent {
  constructor(private memberService:MemberServiceService, private router:Router, ){

  }
  displayedColumns: string[] = ['ID', 'Cin', 'Name', 'CV','DateCreation','Type','actionUpdate'];
  //dataSource = ELEMENT_DATA;
  dataSource = this.memberService.tab;
  
  deleteMember(id:String): void{
    console.log("Delete me 1 ");
    
    this.memberService.deleteMemberByID(id).then(()=>{this.fetchDataSource()})
  }
  fetchDataSource():void{
    this.memberService.getAllMembers().then((result)=>(this.dataSource = result));
  }
}
