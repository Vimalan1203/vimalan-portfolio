import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';
import { Skill } from '../../../core/models/portfolio.models';
import { SkillDialogComponent } from './skill-dialog.component';

@Component({
  selector: 'app-manage-skills',
  templateUrl: './manage-skills.component.html',
  styleUrls: ['./manage-skills.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageSkillsComponent implements OnInit {
  displayedColumns = ['icon', 'name', 'category', 'proficiency', 'actions'];
  dataSource = new MatTableDataSource<Skill>();

  constructor(
    private data: PortfolioDataService,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.data.getSkills().subscribe();
    this.data.skills$.subscribe(skills => {
      this.dataSource.data = skills;
      this.cdr.markForCheck();
    });
  }

  openAdd() {
    this.dialog.open(SkillDialogComponent, { data: {}, width: '460px' })
      .afterClosed().subscribe(r => {
        if (r) {
          this.data.addSkill(r).subscribe({
            next: () => this.snack.open('Skill added! ✅', '', { duration: 2500 }),
            error: () => this.snack.open('Failed to add skill.', '', { duration: 2500 })
          });
        }
      });
  }

  openEdit(skill: Skill) {
    this.dialog.open(SkillDialogComponent, { data: { skill }, width: '460px' })
      .afterClosed().subscribe(r => {
        if (r) {
          this.data.updateSkill(r).subscribe({
            next: () => this.snack.open('Skill updated! ✅', '', { duration: 2500 }),
            error: () => this.snack.open('Failed to update skill.', '', { duration: 2500 })
          });
        }
      });
  }

  delete(skill: Skill) {
    if (confirm(`Delete "${skill.name}"?`)) {
      this.data.deleteSkill(skill.id).subscribe({
        next: () => this.snack.open('Skill deleted.', '', { duration: 2000 }),
        error: () => this.snack.open('Failed to delete skill.', '', { duration: 2000 })
      });
    }
  }

  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
  }
}
