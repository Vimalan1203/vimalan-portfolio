import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  form: FormGroup;
  loading = false;
  error = '';
  hidePassword = true;

  constructor(private fb: FormBuilder, private auth: AuthService,
              private router: Router, private cdr: ChangeDetectorRef) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.form.invalid) return;
    this.loading = true; this.error = '';
    this.auth.login(this.form.value.username, this.form.value.password)
      .subscribe({
        next: () => this.router.navigate(['/admin']),
        error: (e: Error) => {
          this.error = e.message; this.loading = false;
          this.cdr.markForCheck();
        }
      });
  }
}
