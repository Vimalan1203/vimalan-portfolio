import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-footer',
  standalone: false,
  template: `
    <footer>
      <span class="mono">Built with Angular &amp; ❤ by Vimalan Senthilkumar · {{ year }}</span>
      <div class="footer-links">
        <a href="https://github.com/Vimalan1203" target="_blank"><mat-icon>code</mat-icon></a>
        <a href="https://www.linkedin.com/in/vimalan-senthilkumar-823139275/" target="_blank"><mat-icon>link</mat-icon></a>
        <a href="mailto:vimalansenthilkumar@gmail.com"><mat-icon>mail</mat-icon></a>
      </div>
    </footer>`,
  styles: [`
    footer { display:flex; justify-content:space-between; align-items:center;
      padding:1.5rem 5%; border-top:1px solid rgba(255,255,255,0.08);
      color:var(--text-dim); font-size:0.8rem; flex-wrap:wrap; gap:1rem; }
    .mono { font-family:var(--font-mono); }
    .footer-links { display:flex; gap:1rem; }
    .footer-links a { color:var(--text-dim); transition:color 0.2s; text-decoration:none; }
    .footer-links a:hover { color:var(--cyan); }
    mat-icon { font-size:18px; width:18px; height:18px; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent { year = new Date().getFullYear(); }
