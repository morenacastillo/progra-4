import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { clavesCoincidenValidator, usuarioUnico } from '../../validadores/validadores';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-usuarios',
  styleUrl: './form-usuarios.css',
  templateUrl: './form-usuarios.html',
})
export class FormUsuarios implements OnInit{
  controlClave = new FormControl('', { validators: [Validators.required] })
  formUsuarios = new FormGroup({
    user: new FormControl("", { validators: [Validators.required, Validators.minLength(3)],
                                asyncValidators: [usuarioUnico()],
                              updateOn: 'blur'}),

    pass: this.controlClave,
    confirmarPass: new FormControl("", { validators: [Validators.required, Validators.minLength(3), clavesCoincidenValidator(this.controlClave)]} ),

  })

  ngOnInit(): void {
    this.formUsuarios.valueChanges.subscribe(estado => console.log(estado))
  }

  mostrarEstado() {
    // const nombre = this.formUsuarios.controls.user
    console.log(this.formUsuarios.valid) // muestra true ya que estamos preguntando si NOMBRE cumple con sus valideaciones
    //en caso de this.formUsuarios.valid va a dar true en caso de q ambos cumplan - false en caso de que ninguno o alguno no cumpla
  }


}

