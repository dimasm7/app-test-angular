import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbCollapseModule, RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit{
  isMenuCollapsed = true;
  isLogin = false;

  constructor(private authService: AuthService, private router: Router){
    this.isLogin = authService.isLoggedIn();
  }
  
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      this.isLogin = this.authService.isLoggedIn();
    });
  }
  
  logout(){
    this.isMenuCollapsed = true;
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
