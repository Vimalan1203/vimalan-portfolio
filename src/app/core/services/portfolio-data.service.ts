import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, BehaviorSubject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Project, Skill, Experience, ContactMessage, HomePageData, Hero, Role, Stat } from '../models/portfolio.models';
import { environment } from '../../../environments/environment';

// API response shapes (snake_case from FastAPI)
interface ApiProject {
  id: number; title: string; description: string;
  tech_stack: string[]; duration: string; highlights: string[];
  category: string; live_url?: string; github_url?: string;
}
interface ApiSkill {
  id: number; category: string; name: string; proficiency: number; icon: string;
}
interface ApiExperience {
  id: number; role: string; company: string; location: string;
  start_date: string; end_date: string; current: boolean; bullets: string[];
}
interface ApiHomeData {
  hero: {
    tag: string;
    first_name: string;
    last_name: string;
    description: string;
  };
  roles: { title: string }[];
  stats: { num: string; label: string }[];
}

// Mappers: API → Angular model
const mapProject = (p: ApiProject): Project => ({
  id: String(p.id), title: p.title, description: p.description,
  techStack: p.tech_stack, duration: p.duration, highlights: p.highlights,
  category: p.category as any, liveUrl: p.live_url, githubUrl: p.github_url
});
const mapSkill = (s: ApiSkill): Skill => ({
  id: String(s.id), category: s.category, name: s.name,
  proficiency: s.proficiency, icon: s.icon
});
const mapExperience = (e: ApiExperience): Experience => ({
  id: String(e.id), role: e.role, company: e.company, location: e.location,
  startDate: e.start_date, endDate: e.end_date ?? '', current: e.current,
  bullets: e.bullets ?? []
});
const mapHomeData = (d: ApiHomeData): HomePageData => ({
  hero: {
    tag: d.hero.tag,
    first_name: d.hero.first_name,
    last_name: d.hero.last_name,
    description: d.hero.description,
  },
  roles: d.roles.map(r => ({ title: r.title })),
  stats: d.stats.map(s => ({ num: s.num, label: s.label })),
});

const HOME_FALLBACK: HomePageData = {
  hero: {
    tag: 'Available for opportunities',
    first_name: 'Vimalan',
    last_name: 'Senthilkumar',
    description: '3+ years building high-performance government and enterprise web applications with Angular, TypeScript, and RxJS — serving over a million users across India.',
  },
  roles: [
    { title: 'Angular Developer' },
    { title: 'Frontend Engineer' },
    { title: 'UI Architect' },
    { title: 'RxJS Enthusiast' },
  ],
  stats: [
    { num: '3+',  label: 'Years Experience' },
    { num: '1M+', label: 'Users Served' },
    { num: '4',   label: 'State Portals' },
    { num: '35%', label: 'Perf. Gain' },
  ],
};

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  private api = environment.apiUrl;

  private projectsSubject  = new BehaviorSubject<Project[]>([]);
  private skillsSubject    = new BehaviorSubject<Skill[]>([]);
  private homeDataSubject  = new BehaviorSubject<HomePageData>(HOME_FALLBACK);

  projects$  = this.projectsSubject.asObservable();
  skills$    = this.skillsSubject.asObservable();
  homeData$  = this.homeDataSubject.asObservable();

  constructor(private http: HttpClient) {}

  // ── Home ────────────────────────────────────────────────────────────────────
  getHomeData(): Observable<HomePageData> {
    return this.http.get<ApiHomeData>(`${this.api}/home`).pipe(
      map(mapHomeData),
      tap(data => this.homeDataSubject.next(data)),
      catchError(() => {
        this.homeDataSubject.next(HOME_FALLBACK);
        return of(HOME_FALLBACK);
      })
    );
  }

  // ── Projects ────────────────────────────────────────────────────────────────
  getProjects(): Observable<ApiProject[]> {
    return this.http.get<ApiProject[]>(`${this.api}/projects`).pipe(
      tap(list => this.projectsSubject.next(list.map(mapProject)))
    );
  }

  addProject(project: Project): Observable<ApiProject> {
    const body = {
      title: project.title, description: project.description,
      tech_stack: project.techStack, duration: project.duration,
      highlights: project.highlights, category: project.category,
      live_url: project.liveUrl ?? null, github_url: project.githubUrl ?? null
    };
    return this.http.post<ApiProject>(`${this.api}/projects`, body).pipe(
      tap(() => this.getProjects().subscribe())
    );
  }

  updateProject(project: Project): Observable<ApiProject> {
    const body = {
      title: project.title, description: project.description,
      tech_stack: project.techStack, duration: project.duration,
      highlights: project.highlights, category: project.category,
      live_url: project.liveUrl ?? null, github_url: project.githubUrl ?? null
    };
    return this.http.put<ApiProject>(`${this.api}/projects/${project.id}`, body).pipe(
      tap(() => this.getProjects().subscribe())
    );
  }

  deleteProject(id: string): Observable<any> {
    return this.http.delete(`${this.api}/projects/${id}`).pipe(
      tap(() => this.getProjects().subscribe())
    );
  }

  // ── Skills ──────────────────────────────────────────────────────────────────
  getSkills(): Observable<ApiSkill[]> {
    return this.http.get<ApiSkill[]>(`${this.api}/skills`).pipe(
      tap(list => this.skillsSubject.next(list.map(mapSkill)))
    );
  }

  addSkill(skill: Skill): Observable<ApiSkill> {
    const body = { category: skill.category, name: skill.name,
                   proficiency: skill.proficiency, icon: skill.icon };
    return this.http.post<ApiSkill>(`${this.api}/skills`, body).pipe(
      tap(() => this.getSkills().subscribe())
    );
  }

  updateSkill(skill: Skill): Observable<ApiSkill> {
    const body = { category: skill.category, name: skill.name,
                   proficiency: skill.proficiency, icon: skill.icon };
    return this.http.put<ApiSkill>(`${this.api}/skills/${skill.id}`, body).pipe(
      tap(() => this.getSkills().subscribe())
    );
  }

  deleteSkill(id: string): Observable<any> {
    return this.http.delete(`${this.api}/skills/${id}`).pipe(
      tap(() => this.getSkills().subscribe())
    );
  }

  // ── Experiences ─────────────────────────────────────────────────────────────
  getExperiences(): Observable<Experience[]> {
    return new Observable(observer => {
      this.http.get<ApiExperience[]>(`${this.api}/experiences`).subscribe({
        next: list => { observer.next(list.map(mapExperience)); observer.complete(); },
        error: err => observer.error(err)
      });
    });
  }

  // ── Contact ─────────────────────────────────────────────────────────────────
  sendContact(msg: ContactMessage): Observable<any> {
    return this.http.post(`${this.api}/contact`, msg);
  }
}