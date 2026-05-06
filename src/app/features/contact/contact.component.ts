import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  form: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private snack: MatSnackBar,
    private portfolioData: PortfolioDataService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2)]],
      email:   ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading = true;
    this.portfolioData.sendContact(this.form.value).subscribe({
      next: () => {
        this.submitted = true;
        this.loading = false;
        this.snack.open("Message sent! I'll get back to you soon. 🚀", 'Close', { duration: 4000 });
        this.form.reset();
        setTimeout(() => { this.submitted = false; this.cdr.markForCheck(); }, 3000);
        this.cdr.markForCheck();
      },
      error: () => {
        this.loading = false;
        this.snack.open('Failed to send message. Please try again.', 'Close', { duration: 4000 });
        this.cdr.markForCheck();
      }
    });
  }

  get f() { return this.form.controls; }
}
