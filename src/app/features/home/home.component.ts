import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  roles = ['Angular Developer', 'Frontend Engineer', 'UI Architect', 'RxJS Enthusiast'];
  currentRole$ = interval(2500).pipe(
    startWith(0),
    map(i => this.roles[i % this.roles.length])
  );

  stats = [
    { num: '3+', label: 'Years Experience' },
    { num: '1M+', label: 'Users Served' },
    { num: '4', label: 'State Portals' },
    { num: '35%', label: 'Perf. Gain' },
  ];

  ngOnInit() {}
}
