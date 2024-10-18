import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthType } from 'src/app/types/types';
import { ConfirmPasswordValidator } from 'src/app/validators/confirm-password-validator';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.less'],
})
export class AuthFormComponent implements OnChanges {
  @Input() title: string = '';
  @Input() loading: boolean = false;
  @Output() authSubmitted = new EventEmitter<AuthType>();

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  constructor() {
    this.form.valueChanges.subscribe(() => {
      console.log(
        this.form.get('email')?.valid,
        this.form.get('password')?.valid,
        this.form.get('confirmPass')?.valid
      );
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['title']) {
      if (this.title === 'Registration') {
        this.addConfirmPassword();
      } else {
        this.removeConfirmPassword();
      }
    }
  }

  private addConfirmPassword() {
    if (!this.form.get('confirmPass')) {
      this.form.addControl(
        'confirmPass',
        new FormControl('', [Validators.required, Validators.minLength(4)])
      );

      this.form.setValidators(
        ConfirmPasswordValidator.matchPasswords('password', 'confirmPass')
      );
    }
  }

  private removeConfirmPassword() {
    if (this.form.get('confirmPass')) {
      this.form.removeControl('confirmPass');
      this.form.setValidators(null); // Remove custom validator when not needed
      this.form.updateValueAndValidity();
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.authSubmitted.emit(this.form.value);
    }
  }
}
