import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Skill } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-skill-dialog',
  template: `
    <h2 mat-dialog-title>{{ isEdit ? 'Edit' : 'Add' }} Skill</h2>
    <mat-dialog-content>
      <form [formGroup]="form" class="dialog-form">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Skill Name</mat-label>
          <input matInput formControlName="name"/>
          <mat-error *ngIf="form.get('name')?.hasError('required')">Required</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Category</mat-label>
          <mat-select formControlName="category">
            <mat-option *ngFor="let c of categories" [value]="c">{{ c }}</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Icon (emoji)</mat-label>
          <input matInput formControlName="icon" placeholder="⚡"/>
        </mat-form-field>
        <div class="slider-field">
          <label class="slider-label">Proficiency: <strong>{{ form.get('proficiency')?.value }}%</strong></label>
          <mat-slider min="10" max="100" step="5" class="full-slider">
            <input matSliderThumb formControlName="proficiency"/>
          </mat-slider>
        </div>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-raised-button color="primary" (click)="save()">
        <mat-icon>save</mat-icon> {{ isEdit ? 'Update' : 'Add' }}
      </button>
    </mat-dialog-actions>`,
  styles: [`.dialog-form{display:flex;flex-direction:column;gap:.5rem;padding-top:.5rem;min-width:400px}
    .full-width{width:100%}.slider-label{font-size:.875rem;color:var(--text-dim);display:block;margin-bottom:.5rem}
    .slider-field{padding:.5rem 0}.full-slider{width:100%}`],
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
