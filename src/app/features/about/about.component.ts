import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { Experience } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  experiences$!: Observable<Experience[]>;
  constructor(private data: PortfolioDataService) {}
  ngOnInit() { this.experiences$ = this.data.getExperiences(); }
}
