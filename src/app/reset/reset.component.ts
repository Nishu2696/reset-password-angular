import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  userform: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: ServService
  ) { 
    this.userform = new FormGroup({
      "email": new FormControl("", [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
  }

  senddata(){
    this.service.reset(this.userform.value).subscribe((data) => {
      alert("New Code Has Been Generated to the registered E-mail user");
    });
    this.router.navigate(['/password']);
  }

}
