import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, delay } from 'rxjs';
import { Project, Skill, Experience } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {

  private projectsSubject = new BehaviorSubject<Project[]>(this.getInitialProjects());
  private skillsSubject   = new BehaviorSubject<Skill[]>(this.getInitialSkills());

  projects$ = this.projectsSubject.asObservable();
  skills$   = this.skillsSubject.asObservable();

  // ── Projects ──────────────────────────────────────────────
  getProjects(): Observable<Project[]> {
    return this.projects$.pipe(delay(300));
  }

  addProject(project: Project): void {
    const current = this.projectsSubject.value;
    project.id = Date.now().toString();
    this.projectsSubject.next([...current, project]);
  }

  updateProject(updated: Project): void {
    const current = this.projectsSubject.value.map(p => p.id === updated.id ? updated : p);
    this.projectsSubject.next(current);
  }

  deleteProject(id: string): void {
    this.projectsSubject.next(this.projectsSubject.value.filter(p => p.id !== id));
  }

  // ── Skills ────────────────────────────────────────────────
  getSkills(): Observable<Skill[]> {
    return this.skills$.pipe(delay(200));
  }

  addSkill(skill: Skill): void {
    skill.id = Date.now().toString();
    this.skillsSubject.next([...this.skillsSubject.value, skill]);
  }

  updateSkill(updated: Skill): void {
    this.skillsSubject.next(this.skillsSubject.value.map(s => s.id === updated.id ? updated : s));
  }

  deleteSkill(id: string): void {
    this.skillsSubject.next(this.skillsSubject.value.filter(s => s.id !== id));
  }

  // ── Experience ────────────────────────────────────────────
  getExperiences(): Observable<Experience[]> {
    return of(this.getInitialExperiences()).pipe(delay(200));
  }

  // ── Seed Data ─────────────────────────────────────────────
  private getInitialProjects(): Project[] {
    return [
      {
        id: '1',
        title: 'UPEXCISE – State Excise Management System',
        description: 'State-level excise management platform digitalizing liquor manufacturing and distribution supply chains across Uttar Pradesh.',
        techStack: ['Angular 8', 'TypeScript', 'RxJS', 'Spring Boot', 'REST APIs', 'Git'],
        duration: '~956 days',
        highlights: [
          'Led frontend development for 500+ government stakeholders',
          'Real-time inventory tracking dashboards',
          '~25% reduction in system response time'
        ],
        category: 'government'
      },
      {
        id: '2',
        title: 'TNPDS – Tamil Nadu Public Distribution System',
        description: 'Large-scale PDS portal serving millions of Tamil Nadu beneficiaries with responsive, accessible UI components.',
        techStack: ['Angular 14–20', 'Angular Material', 'TypeScript', 'MySQL', 'REST APIs'],
        duration: 'Ongoing',
        highlights: [
          'Serves millions of beneficiaries',
          'WCAG-accessible UI across mobile & desktop',
          '99%+ system uptime'
        ],
        category: 'government'
      },
      {
        id: '3',
        title: 'UPPDS & MHPDS – Public Distribution Portals',
        description: 'Developing and maintaining PDS portals for Uttar Pradesh and Maharashtra with seamless API integration.',
        techStack: ['Angular 14–20', 'Angular Material', 'TypeScript', 'REST APIs', 'Git'],
        duration: 'Ongoing',
        highlights: [
          'Multi-state portal management',
          'JWT Auth & RBAC implementation',
          'Cross-functional Agile delivery'
        ],
        category: 'government'
      }
    ];
  }

  private getInitialSkills(): Skill[] {
    return [
      { id: '1', category: 'Frontend', name: 'Angular', proficiency: 95, icon: '⚡' },
      { id: '2', category: 'Frontend', name: 'TypeScript', proficiency: 90, icon: '🔷' },
      { id: '3', category: 'Frontend', name: 'RxJS', proficiency: 85, icon: '🔁' },
      { id: '4', category: 'Frontend', name: 'Angular Material', proficiency: 90, icon: '🎨' },
      { id: '5', category: 'Frontend', name: 'HTML5 / CSS3', proficiency: 92, icon: '🌐' },
      { id: '6', category: 'Backend', name: 'Spring Boot', proficiency: 30, icon: '🌿' },
      { id: '7', category: 'Backend', name: 'REST APIs', proficiency: 88, icon: '🔗' },
      { id: '8', category: 'Database', name: 'MySQL', proficiency: 50, icon: '🗄️' },
      { id: '9', category: 'Tools', name: 'Git', proficiency: 95, icon: '🛠' },
      { id: '10', category: 'Tools', name: 'Agile/Scrum', proficiency: 88, icon: '♟' },
    ];
  }

  private getInitialExperiences(): Experience[] {
    return [
      {
        id: '1',
        role: 'Angular Developer',
        company: 'OASYS Cybernetics',
        location: 'Tiruchirappalli, India',
        startDate: 'June 2022',
        endDate: '',
        current: true,
        bullets: [
          'Architected SPAs using Angular 12–20 serving 1M+ users across 4 state government portals.',
          'Improved application performance by ~35% via lazy loading & OnPush change detection.',
          'Integrated 20+ REST APIs with RxJS pipelines, reducing frontend bugs by ~30%.',
          'Built reusable Angular Material component library — cut feature delivery time by 25%.',
          'Implemented JWT authentication and RBAC for multi-stakeholder government systems.',
          'Mentored 2 junior developers; refactored legacy codebases, reducing complexity by 40%.'
        ]
      },
      {
        id: '2',
        role: 'Shift Supervisor',
        company: 'SCM Textile & Processing Mills',
        location: 'Erode, India',
        startDate: 'November 2021',
        endDate: 'April 2022',
        current: false,
        bullets: [
          'Supervised daily production ensuring safety and consistent workflow targets.',
          'Trained new staff and reduced material waste by 15% via stock rotation.'
        ]
      }
    ];
  }
}
