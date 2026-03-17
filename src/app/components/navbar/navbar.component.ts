import { Component, HostListener, OnInit } from '@angular/core';

interface NavItem {
  label: string;
  anchor: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar" [class.scrolled]="scrolled" [class.menu-open]="menuOpen">
      <div class="nav-container">

        <!-- Logo -->
        <a class="nav-logo" (click)="scrollTo('hero')">
          <span class="logo-initials">FA</span>
          <span class="logo-text">Francis <strong>Amani</strong></span>
        </a>

        <!-- Desktop Links -->
        <ul class="nav-links">
          <li *ngFor="let item of navItems">
            <a class="nav-link" [class.active]="activeSection === item.anchor"
               (click)="scrollTo(item.anchor)">
              {{ item.label }}
            </a>
          </li>
        </ul>

        <!-- CTA -->
        <div class="nav-cta">
          <a href="assets/cv/cv_francis_amani.pdf" download class="btn-download">
            <i class="pi pi-download"></i>
            <span>Télécharger CV</span>
          </a>
          <button class="hamburger" (click)="toggleMenu()" [class.open]="menuOpen">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="mobile-menu" [class.open]="menuOpen">
        <ul>
          <li *ngFor="let item of navItems">
            <a (click)="scrollTo(item.anchor); menuOpen = false">
              <i class="pi {{ item.icon }}"></i>
              {{ item.label }}
            </a>
          </li>
        </ul>
        <a href="assets/cv/cv_francis_amani.pdf" download class="btn-primary mobile-dl">
          <i class="pi pi-download"></i> Télécharger CV
        </a>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  menuOpen = false;
  activeSection = 'hero';

  navItems: NavItem[] = [
    { label: 'Accueil',     anchor: 'hero',       icon: 'pi-home' },
    { label: 'À propos',    anchor: 'about',      icon: 'pi-user' },
    { label: 'Compétences', anchor: 'skills',     icon: 'pi-code' },
    { label: 'Parcours',    anchor: 'experience', icon: 'pi-briefcase' },
    { label: 'Projets',     anchor: 'projects',   icon: 'pi-th-large' },
    { label: 'Contact',     anchor: 'contact',    icon: 'pi-envelope' },
  ];

  ngOnInit(): void {
    this.trackActiveSection();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 60;
    this.trackActiveSection();
  }

  trackActiveSection(): void {
    const sections = this.navItems.map(i => i.anchor);
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        this.activeSection = id;
        break;
      }
    }
  }

  scrollTo(anchor: string): void {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
}
