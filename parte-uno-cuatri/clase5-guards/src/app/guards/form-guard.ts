import { CanDeactivateFn } from '@angular/router';
import { Registro } from '../componentes/registro/registro';

export const formGuard: CanDeactivateFn<Registro> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  if (component.form.dirty && !component.saved) {
    return confirm('Tenés cambios sin guardar. ¿Querés salir de todos modos?')
  }
  return true;
};
