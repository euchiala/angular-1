import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from 'src/model/Member';
import { GLOBAL } from './app-config';

@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {

  //constructor(private httpClient:HttpClient) { }
  // Creation de tableau du service
  tab :Member[] = GLOBAL._DB.members;

  
  saveMember(member:any):Promise<Member>
  {
    const memberToSave = {...member,
      id: member.id ?? Math.ceil((Math.random()*10000)).toString(),
      createat : new Date().toISOString()
    }
    console.log(memberToSave);
    this.tab = [memberToSave,...this.tab.filter(item  => item.id!=memberToSave.id)]

    return new Promise(resolve => resolve(memberToSave))
    //return this.httpClient.post<Member>("link", member).toPromise();
  }
  
  //Promise pour que elle va etre une request http vers le front pour la syncronisation total entre le front et le back
  getMemberByID(id:String):Promise<Member>{
    //Methode 1
    //let elementTofind :Member;
    //elementTofind = this.tab.filter(item  => item.id === id)[0]??null;
    //return new Promise(resolve => resolve(elementTofind))

    this.tab.filter(item  => item.id === id)[0]??null;
    return new Promise(resolve => resolve(this.tab.filter(item  => item.id === id)[0]??null))

    //this.httpClient.get<Member>("link(lien de front)",id).toPromise();
  }

}
