import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }
  id: number = 0;
  ngOnInit(): void {
    this.router.params.subscribe(par => {
      this.id = Number(par['id']);
    })
  }

}
