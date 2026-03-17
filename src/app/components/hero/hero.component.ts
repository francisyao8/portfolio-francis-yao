import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section class="hero" id="hero">
      <!-- Background decoration -->
      <div class="hero-bg">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="grid-lines"></div>
      </div>

      <div class="container">
        <div class="hero-inner">

          <!-- Left: Content -->
          <div class="hero-content">
            <div class="hero-badge fade-in-up">
              <span class="pulse-dot"></span>
              Disponible pour des opportunités
            </div>

            <h1 class="hero-title fade-in-up">
              Yao Jean<br>
              <span class="accent">Francis</span><br>
              Amani
            </h1>

            <p class="hero-role fade-in-up">
              <span class="role-tag">Développeur Full-Stack</span>
              <span class="sep">/</span>
              <span class="role-tag">Tech Lead</span>
              <span class="sep">/</span>
              <span class="role-tag">UI/UX</span>
            </p>

            <p class="hero-desc fade-in-up">
              Passionné par la création de solutions digitales innovantes.
              Spécialisé en développement web &amp; mobile, basé à <strong>Abidjan, Côte d'Ivoire</strong>.
            </p>

            <div class="hero-actions fade-in-up">
              <a (click)="scrollTo('projects')" class="btn-primary">
                <i class="pi pi-th-large"></i>
                Voir mes projets
              </a>
              <a (click)="scrollTo('contact')" class="btn-outline">
                <i class="pi pi-send"></i>
                Me contacter
              </a>
            </div>

            <!-- Stats -->
            <div class="hero-stats fade-in-up">
              <div class="stat" *ngFor="let s of stats">
                <span class="stat-value">{{ s.value }}</span>
                <span class="stat-label">{{ s.label }}</span>
              </div>
            </div>
          </div>

          <!-- Right: Photo -->
          <div class="hero-visual fade-in-up">
            <div class="photo-wrapper">
              <div class="photo-ring"></div>
              <img src="assets/images/francis.png" alt="Yao Jean Francis Amani" class="photo" />
              <div class="tech-badges">
                <div class="tech-badge badge-angular">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" />
                </div>
                <div class="tech-badge badge-spring">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" />
                </div>
                <div class="tech-badge badge-flutter">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" />
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Scroll indicator -->
        <div class="scroll-hint">
          <div class="scroll-mouse">
            <div class="scroll-wheel"></div>
          </div>
          <span>Défiler vers le bas</span>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  stats = [
    { value: '2+', label: 'Ans Tech Lead' },
    { value: '6+', label: 'Produits livrés' },
    { value: '3+', label: 'Technologies' },
  ];

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
