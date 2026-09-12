import { ValidatorFn, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { inject } from '@angular/core';
import { ApiClient } from '../services/api-client';

export function clavesCoincidenValidator(controlACoincidir: AbstractControl): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valorControl = control.value
    const valorControlCoincidir= controlACoincidir.value
    if (valorControl !== valorControlCoincidir) {
        return {controlesNoCoinciden: true}}
        else {
            return null;
        }
    }
}

export function usuarioUnico(): AsyncValidatorFn {
    const apiClient = inject(ApiClient)
    return async(control: AbstractControl) : Promise<ValidationErrors | null> => {
        const usuarioEncontrado = await apiClient.getUsuario(control.value)
        if (usuarioEncontrado) {
            return { usuarioYaExiste: true }
        } else {
            return null;
        }
    }
}
