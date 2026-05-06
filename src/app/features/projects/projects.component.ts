import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { Project } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {
  projects$!: Observable<Project[]>;
  constructor(private data: PortfolioDataService) {}
  ngOnInit() {
    this.data.getProjects().subscribe(); // fetch & populate BehaviorSubject
    this.projects$ = this.data.projects$;
  }
}
