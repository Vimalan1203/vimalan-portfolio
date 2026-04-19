# Vimalan Senthilkumar – Angular Portfolio

A full-featured Angular 21 portfolio SPA with a protected Admin CRUD panel.

## ✨ Features

| Feature | Details |
|---|---|
| **Lazy Loading** | Every route is a separate lazy-loaded NgModule |
| **RxJS & Observables** | BehaviorSubject data store, combineLatest, interval typewriter |
| **Angular Material** | Cards, Tables, Dialogs, Sliders, Snackbars, Paginator |
| **JWT Auth + Route Guards** | Login → protected /admin routes |
| **OnPush Change Detection** | Every component uses ChangeDetectionStrategy.OnPush |
| **Full CRUD** | Add / Edit / Delete Projects & Skills via Material Dialogs |
| **Reactive Forms** | Validation on Contact and Login forms |
| **Responsive** | Mobile-friendly with hamburger nav |

## 🚀 Getting Started

```bash
npm install
ng serve
# Open http://localhost:4200
```

## 🔐 Admin Login

Navigate to `/auth/login`

```
Username: vimalan
Password: Admin@2025
```

Then visit `/admin` to manage Projects and Skills.

## 🏗️ Project Structure

```
src/app/
├── core/
│   ├── guards/        # AuthGuard
│   ├── interceptors/  # JWT AuthInterceptor
│   ├── models/        # TypeScript interfaces
│   └── services/      # PortfolioDataService, AuthService
├── shared/
│   └── components/    # Navbar, Footer
└── features/
    ├── home/          # Hero with RxJS typewriter
    ├── about/         # Experience timeline
    ├── skills/        # Grouped skill cards with bars
    ├── projects/      # Project cards
    ├── contact/       # Reactive form
    ├── auth/          # Login page
    └── admin/         # Dashboard + CRUD tables
```

## 🌐 Deploy to GitHub Pages

```bash
npm install -g angular-cli-ghpages
ng build --base-href "https://vimalansenthilkumar.github.io/"
npx angular-cli-ghpages --dir=dist/vimalan-portfolio/browser
```

## 🛠 Tech Stack

- Angular 21
- Angular Material
- RxJS
- TypeScript
- SCSS
