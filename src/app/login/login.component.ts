import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ServService
  ) { 
    this.userform = new FormGroup({
      "email": new FormControl("", [Validators.required, Validators.email]),
      "password": new FormControl("", Validators.required)
    });
  }

  ngOnInit(): void {
  }

  senddata(){
      this.service.login(this.userform.value).subscribe((data) => {
        alert("login successful");
      });
  }

  reset(){
    this.router.navigate(['/reset']);
  }

}
