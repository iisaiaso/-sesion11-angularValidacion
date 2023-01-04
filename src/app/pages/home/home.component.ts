import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  public formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ]
    })
  }

  send(): any {
    console.log(this.formLogin.value)
  }

}
