import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ConfirmPasswordValidator {
    static matchPasswords(controlName: string, matchingControlName: string) {
        return (formGroup: AbstractControl): ValidationErrors | null => {
          const control = formGroup.get(controlName);
          const matchingControl = formGroup.get(matchingControlName);
    
          if (control?.value !== matchingControl?.value) {
            matchingControl?.setErrors({ confirmPassword: true });
            return { confirmPassword: true };
          } else {
            matchingControl?.setErrors(null);
            return null;
          }
        };
      }
}
