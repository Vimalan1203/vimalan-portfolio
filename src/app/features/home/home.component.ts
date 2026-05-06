import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable, interval, switchMap, startWith, map } from 'rxjs';
import { HomePageData } from '../../core/models/portfolio.models';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  homeData$!: Observable<HomePageData>;
  currentRole$!: Observable<string>;

  constructor(private portfolioData: PortfolioDataService) {}

  ngOnInit(): void {
    // Trigger the API call — result is pushed into the service's BehaviorSubject
    this.portfolioData.getHomeData().subscribe();

    // Bind directly to the service's shared stream (fallback already seeded)
    this.homeData$ = this.portfolioData.homeData$;

    // Rotate roles every 2500ms using live data from the stream
    this.currentRole$ = this.homeData$.pipe(
      switchMap(data =>
        interval(2500).pipe(
          startWith(0),
          map(i => data.roles[i % data.roles.length].title)
        )
      )
    );
  }
}