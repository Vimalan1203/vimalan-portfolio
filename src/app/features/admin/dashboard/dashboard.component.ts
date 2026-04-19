import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  stats$!: Observable<{ projects: number; skills: number; experiences: number }>;

  quickLinks = [
    { label: 'Manage Projects', icon: 'work', route: '/admin/projects' },
    { label: 'Manage Skills',   icon: 'psychology', route: '/admin/skills' },
    { label: 'View Portfolio',  icon: 'open_in_new', route: '/' },
  ];

  constructor(public auth: AuthService, private data: PortfolioDataService) {}

  ngOnInit() {
    this.stats$ = combineLatest([
      this.data.getProjects(),
      this.data.getSkills(),
      this.data.getExperiences()
    ]).pipe(map(([p, s, e]) => ({ projects: p.length, skills: s.length, experiences: e.length })));
  }
}
