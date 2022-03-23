import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required)
  });
  constructor(private authService: SocialAuthService) { }
  ngOnInit(): void {
    
  }

  submitForm(){
    console.log(this.loginForm.value);
  }
  googleLogin(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(resp => {
      console.log(resp);
    })
  }

  
  

}
