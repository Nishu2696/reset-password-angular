import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  userform: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: ServService
  ) {
    this.userform = new FormGroup({
      "lastName": new FormControl("", Validators.required),
      "email": new FormControl("", Validators.required),
      "password": new FormControl("", Validators.required)
    });
   }

  ngOnInit(): void {
  }

  senddata(){
    this.service.change(this.userform.value).subscribe((data) => {
      alert("New Password has been changed to the registered user");
    });
    this.router.navigate(['/login']);
  }

}
