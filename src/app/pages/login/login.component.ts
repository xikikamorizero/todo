import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { Router, RouterLink } from '@angular/router';
import { AuthType } from 'src/app/types/types';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, AuthFormComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  loading = false;
  login$ = this.authService.login$;

  constructor(private authService: AuthService, private router: Router) {
    this.login$.subscribe((e) => {
      this.loading = false;
      if (e.success) {
        this.router.navigate(['/']);
        return;
      }
      alert(e.message);
    });
  }

  onLogin(value: AuthType) {
    this.loading = true;
    this.authService.login(value);
  }
}
