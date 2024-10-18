import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.authService.initializeAuthState();
    this.authService.isAuth$.subscribe((isAuth) => {
      if (!isAuth) {
        this.router.navigate(['/login']);
        return;
      }
    });
  }
}
