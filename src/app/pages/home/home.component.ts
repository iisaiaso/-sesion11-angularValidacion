import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public formContacto!: FormGroup;
  resultado!: string
  resultadoF!: string

  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.formContacto = this.formBuilder.group({
      nombre: ['',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      mensaje: ['',
        [
          Validators.required
        ]
      ]
    })
  }
  sendContact(): any {
    if (this.formContacto.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }

}
