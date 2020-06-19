import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ServService } from '../serv.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: ServService
  ) { 
    this.userform = new FormGroup({
      "firstName": new FormControl("", Validators.required),
      "lastName": new FormControl("", Validators.required),
      "email": new FormControl("", [Validators.required, Validators.email]),
      "password": new FormControl("", Validators.required)
    });
  }

  ngOnInit(): void {
  }

  senddata(){
    this.service.register(this.userform.value).subscribe((data) => {
      alert("User has been registered");
    });
  }

}
