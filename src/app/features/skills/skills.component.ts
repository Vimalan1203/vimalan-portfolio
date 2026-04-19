import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { Skill } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit {
  groupedSkills$!: Observable<Record<string, Skill[]>>;

  constructor(private data: PortfolioDataService) {}

  ngOnInit() {
    this.groupedSkills$ = this.data.getSkills().pipe(
      map(skills => skills.reduce((acc, s) => {
        acc[s.category] = acc[s.category] || [];
        acc[s.category].push(s);
        return acc;
      }, {} as Record<string, Skill[]>))
    );
  }

  objectKeys = Object.keys;
}
