import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  menuOpen = false;
  navLinks = [
    { label: 'Home',     path: '/' },
    { label: 'About',    path: '/about' },
    { label: 'Skills',   path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact',  path: '/contact' },
  ];
  constructor(public auth: AuthService, private router: Router) {}
  ngOnInit() {}
  logout() { this.auth.logout(); }
  toggleMenu() { this.menuOpen = !this.menuOpen; }
}
