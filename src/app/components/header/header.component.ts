import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
  isAuth: boolean = false;
  constructor(protected authService:AuthService) {}

  ngOnInit(): void {
    this.authService.isAuth$.subscribe((authStatus) => {
      this.isAuth = authStatus;
    });
  }

  logOut(){
    this.authService.logout()
  }
}
