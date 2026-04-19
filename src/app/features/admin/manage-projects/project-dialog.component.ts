import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Project } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDialogComponent {
  form: FormGroup;
  isEdit: boolean;
  categories = ['government', 'enterprise', 'personal'];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { project?: Project }
  ) {
    this.isEdit = !!data?.project;
    const p = data?.project;
    this.form = this.fb.group({
      title:       [p?.title || '', Validators.required],
      description: [p?.description || '', Validators.required],
      category:    [p?.category || 'government', Validators.required],
      duration:    [p?.duration || ''],
      techStack:   [p?.techStack?.join(', ') || '', Validators.required],
      highlights:  [p?.highlights?.join('\n') || ''],
      liveUrl:     [p?.liveUrl || ''],
      githubUrl:   [p?.githubUrl || ''],
    });
  }

  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const v = this.form.value;
    const project: Partial<Project> = {
      ...this.data?.project,
      title:       v.title,
      description: v.description,
      category:    v.category,
      duration:    v.duration,
      techStack:   v.techStack.split(',').map((s: string) => s.trim()).filter(Boolean),
      highlights:  v.highlights.split('\n').map((s: string) => s.trim()).filter(Boolean),
      liveUrl:     v.liveUrl || undefined,
      githubUrl:   v.githubUrl || undefined,
    };
    this.dialogRef.close(project);
  }
}
