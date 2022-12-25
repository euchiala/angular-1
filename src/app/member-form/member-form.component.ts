import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

import { Member } from 'src/model/Member';
@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {// 

  form:any;
  ngOnInit(): void {
    this.initForm()
  }
  
  initForm():void{
    this.form = new FormGroup({
      cin : new FormControl(null, [Validators.required]),
      name : new FormControl(null, [Validators.required]),
      cv : new FormControl(null, [Validators.required]),
      type : new FormControl(null, [Validators.required])
    })
  }
  onsub():void{
    //recupruration et affichage des formulaire.
    console.log(this.form.value)
  }

}
