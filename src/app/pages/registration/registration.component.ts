import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthFormComponent } from 'src/app/components/auth-form/auth-form.component';
import { AuthService } from 'src/app/service/auth.service';
import { AuthType } from 'src/app/types/types';

@Component({
  standalone: true,
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  imports: [AuthFormComponent, RouterLink],
  styleUrls: ['./registration.component.less'],
})
export class RegistrationComponent {
  loading = false;
  registration$ = this.authService.registration$;
  constructor(private authService: AuthService, private router: Router) {
    this.registration$.subscribe((e) => {
      this.loading = false;
      if (e.success) {
        this.router.navigate(['/']);
        return;
      }
      alert(e.message);
    });
  }
  onRegistration(value: AuthType) {
    this.loading = true;
    this.authService.registration(value);
  }
}
