import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private fb: FormBuilder, private snack: MatSnackBar) {
    this.form = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2)]],
      email:   ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    // Simulate API call — replace with real endpoint
    this.submitted = true;
    this.snack.open('Message sent! I\'ll get back to you soon. 🚀', 'Close', { duration: 4000 });
    this.form.reset();
    setTimeout(() => this.submitted = false, 3000);
  }

  get f() { return this.form.controls; }
}
