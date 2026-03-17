import { Component } from '@angular/core';

interface Experience {
  company: string;
  role: string;
  period: string;
  current: boolean;
  logo: string;
  description: string;
  tasks: string[];
  tags: string[];
}

interface Education {
  degree: string;
  school: string;
  period: string;
  icon: string;
}

@Component({
  selector: 'app-experience',
  template: `
    <section class="experience" id="experience">
      <div class="container">
        <div class="section-header fade-in-up">
          <div class="section-badge"><i class="pi pi-briefcase"></i>Parcours</div>
          <h2>Expériences &amp; <span>Formation</span></h2>
          <p>Un parcours axé sur l'innovation, le leadership technique et la livraison de produits concrets.</p>
        </div>

        <div class="exp-grid">
          <!-- Left: Experience -->
          <div class="timeline-col fade-in-up">
            <h3 class="col-title"><i class="pi pi-briefcase"></i> Expériences Professionnelles</h3>

            <div class="timeline">
              <div class="timeline-item" *ngFor="let exp of experiences; let i = index" [class.active]="activeExp === i" (click)="activeExp = i">
                <div class="timeline-dot" [class.current]="exp.current"></div>
                <div class="timeline-card">
                  <div class="card-header">
                    <img [src]="exp.logo" [alt]="exp.company" class="company-logo" (error)="onImgError($event)" />
                    <div>
                      <h4>{{ exp.role }}</h4>
                      <div class="company-name">{{ exp.company }}</div>
                      <div class="period">
                        <i class="pi pi-calendar"></i> {{ exp.period }}
                        <span *ngIf="exp.current" class="badge-current">En poste</span>
                      </div>
                    </div>
                  </div>
                  <p class="card-desc">{{ exp.description }}</p>
                  <ul class="task-list" *ngIf="exp.tasks.length">
                    <li *ngFor="let task of exp.tasks">{{ task }}</li>
                  </ul>
                  <div class="card-tags">
                    <p-chip *ngFor="let tag of exp.tags" [label]="tag"></p-chip>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Education -->
          <div class="edu-col fade-in-up">
            <h3 class="col-title"><i class="pi pi-graduation-cap"></i> Formation</h3>

            <div class="edu-list">
              <div class="edu-card" *ngFor="let edu of education">
                <div class="edu-icon">
                  <i class="pi {{ edu.icon }}"></i>
                </div>
                <div class="edu-content">
                  <h4>{{ edu.degree }}</h4>
                  <p>{{ edu.school }}</p>
                  <span class="edu-period"><i class="pi pi-clock"></i> {{ edu.period }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  activeExp = 1;

  experiences: Experience[] = [
    {
      company: 'Chic Shop Riviera 3',
      role: 'Informaticien — Service Prix & Étiquetage',
      period: 'Août 2021 — Octobre 2021',
      current: false,
      logo: 'assets/images/logos/chicshop-logo.png',
      description: 'Poste en gestion informatique du service prix et étiquetage au sein d\'une grande surface.',
      tasks: [
        'Affichage des prix des produits dans les rayons',
        'Mise en place des codes-barres sur les produits non étiquetés',
      ],
      tags: ['Microsoft Office', 'Gestion de stocks', 'Étiquetage'],
    },
    {
      company: 'Tornixtech',
      role: 'Tech Lead — Développeur Logiciel',
      period: 'Mai 2023 — Août 2025',
      current: false,
      logo: 'assets/images/logos/tornixtech-logo.png',
      description: 'Poste clé dans le développement et leadership technique de plusieurs produits SaaS innovants déployés en Côte d\'Ivoire et Afrique.',
      tasks: [
        'Lead technique sur CashDash, Keletick, OnixMail, FlotyshHub, FlowHub',
        'Conception et implémentation des architectures frontend & backend',
        'Développement Angular, Spring Boot, Flutter, Laravel',
        'Participation à la définition des roadmaps produits',
        'Revue de code et mentoring de développeurs juniors',
      ],
      tags: ['Angular', 'Spring Boot', 'Flutter', 'Laravel', 'PostgreSQL', 'Tech Lead'],
    },
    {
      company: 'Eburtis',
      role: 'Développeur Logiciel',
      period: 'Janvier 2026 — Présent',
      current: true,
      logo: 'assets/images/logos/eburtis-logo.png',
      description: 'Contribution au développement d\'applications web et participation à la conception et à l\'implémentation de fonctionnalités clés.',
      tasks: [
        'Développement d\'applications web et mobile',
        'Développement de Snedai Visa — plateforme de pré-enrôlement au visa ivoirien',
        'Implémentation de fonctionnalités produit en Angular + Spring Boot',
      ],
      tags: ['Angular', 'Spring Boot', 'PrimeNG', 'REST API'],
    }
  ];

  education: Education[] = [
    {
      degree: 'Licence en Génie Logiciel',
      school: 'Institut de Management et des Technologies d\'Abidjan (IMT) — Abidjan',
      period: '2019 / 2022',
      icon: 'pi-graduation-cap',
    },
    {
      degree: 'Certificat Designer UI/UX — Coursera',
      school: 'Coursera (en cours)',
      period: 'Depuis Septembre 2025',
      icon: 'pi-palette',
    },
    {
      degree: 'Baccalauréat — Série D',
      school: 'Lycée de Garçons de Bingerville — Abidjan',
      period: '2018 / 2019',
      icon: 'pi-book',
    },
  ];

  onImgError(e: Event): void {
    const img = e.target as HTMLImageElement;
    img.style.display = 'none';
  }
}
