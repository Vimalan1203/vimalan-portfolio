import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../../core/guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { ProjectDialogComponent } from './manage-projects/project-dialog.component';
import { ManageSkillsComponent } from './manage-skills/manage-skills.component';
import { SkillDialogComponent } from './manage-skills/skill-dialog.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'projects', component: ManageProjectsComponent, canActivate: [AuthGuard] },
  { path: 'skills', component: ManageSkillsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    DashboardComponent, ManageProjectsComponent, ProjectDialogComponent,
    ManageSkillsComponent, SkillDialogComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), ReactiveFormsModule,
    MatCardModule, MatIconModule, MatButtonModule, MatTableModule, MatPaginatorModule,
    MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule,
    MatSliderModule, MatTooltipModule, MatSnackBarModule
  ]
})
export class AdminModule {}
