import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService:AuthService, private ngzone:NgZone, private router:Router){

  }
  tryGoogleLogin():void {
    this.authService.doGoogleLogin().then(()=>{this.succesRedirect()})
  }
  succesRedirect() :void{
    //redirect to dashboard
    this.ngzone.run(()=>{this.router.navigate(['/members'])})
  }
}
