import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';
import { Project } from '../../../core/models/portfolio.models';
import { ProjectDialogComponent } from './project-dialog.component';

@Component({
  selector: 'app-manage-projects',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageProjectsComponent implements OnInit {
  displayedColumns = ['title', 'category', 'duration', 'techStack', 'actions'];
  dataSource = new MatTableDataSource<Project>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private data: PortfolioDataService,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Load from API on init
    this.data.getProjects().subscribe();
    // Subscribe to the BehaviorSubject for live updates
    this.data.projects$.subscribe(projects => {
      this.dataSource.data = projects;
      if (this.paginator) this.dataSource.paginator = this.paginator;
      this.cdr.markForCheck();
    });
  }

  openAdd() {
    const ref = this.dialog.open(ProjectDialogComponent, { data: {}, width: '620px' });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.data.addProject(result).subscribe({
          next: () => this.snack.open('Project added! ✅', '', { duration: 2500 }),
          error: () => this.snack.open('Failed to add project.', '', { duration: 2500 })
        });
      }
    });
  }

  openEdit(project: Project) {
    const ref = this.dialog.open(ProjectDialogComponent, { data: { project }, width: '620px' });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.data.updateProject(result).subscribe({
          next: () => this.snack.open('Project updated! ✅', '', { duration: 2500 }),
          error: () => this.snack.open('Failed to update project.', '', { duration: 2500 })
        });
      }
    });
  }

  delete(project: Project) {
    if (confirm(`Delete "${project.title}"?`)) {
      this.data.deleteProject(project.id).subscribe({
        next: () => this.snack.open('Project deleted.', '', { duration: 2000 }),
        error: () => this.snack.open('Failed to delete project.', '', { duration: 2000 })
      });
    }
  }

  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
  }
}
