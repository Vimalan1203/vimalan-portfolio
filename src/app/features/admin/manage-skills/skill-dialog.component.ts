import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Skill } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-skill-dialog',
  templateUrl: './skill-dialog.component.html',
  styleUrls: ['./skill-dialog.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillDialogComponent {
  form: FormGroup;
  isEdit: boolean;
  categories = ['Frontend', 'Backend', 'Database', 'Tools', 'Other'];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SkillDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { skill?: Skill }
  ) {
    this.isEdit = !!data?.skill;
    const s = data?.skill;
    this.form = this.fb.group({
      name:        [s?.name || '', Validators.required],
      category:    [s?.category || 'Frontend', Validators.required],
      icon:        [s?.icon || '⚡'],
      proficiency: [s?.proficiency || 80],
    });
  }

  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.dialogRef.close({ ...this.data?.skill, ...this.form.value });
  }
}
