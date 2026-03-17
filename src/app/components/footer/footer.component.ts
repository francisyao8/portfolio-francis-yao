import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="footer-grid">
            <!-- Brand -->
            <div class="footer-brand">
              <div class="footer-logo">
                <span class="logo-initials">FA</span>
                <span class="logo-text">Francis <strong>Amani</strong></span>
              </div>
              <p>Développeur Full-Stack passionné, basé à Abidjan. Je construis des solutions digitales innovantes pour l'Afrique.</p>
              <div class="footer-socials">
                <a href="mailto:francisamany@outlook.com" class="social-link">
                  <i class="pi pi-envelope"></i>
                </a>
                <a href="#" class="social-link">
                  <i class="pi pi-linkedin"></i>
                </a>
                <a href="#" class="social-link">
                  <i class="pi pi-github"></i>
                </a>
              </div>
            </div>

            <!-- Quick links -->
            <div class="footer-links">
              <h4>Navigation</h4>
              <ul>
                <li *ngFor="let item of navItems">
                  <a (click)="scrollTo(item.anchor)" style="cursor:pointer">{{ item.label }}</a>
                </li>
              </ul>
            </div>

            <!-- Stack -->
            <div class="footer-stack">
              <h4>Stack Technique</h4>
              <div class="stack-chips">
                <span *ngFor="let tech of stack">{{ tech }}</span>
              </div>
            </div>

            <!-- Contact -->
            <div class="footer-contact">
              <h4>Contact rapide</h4>
              <div class="contact-lines">
                <p><i class="pi pi-envelope"></i> francisamany@outlook.com</p>
                <p><i class="pi pi-phone"></i> 07 79 72 93 39</p>
                <p><i class="pi pi-map-marker"></i> Riviera Bonoumin, Abidjan</p>
              </div>
              <a href="assets/cv/cv_francis_amani.pdf" download class="btn-primary footer-dl">
                <i class="pi pi-download"></i> Télécharger CV
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p>© {{ year }} Yao Jean Francis Amani — Développeur Full-Stack</p>
          <p>Construit avec <strong>Angular</strong> + <strong>PrimeNG</strong> ❤</p>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();

  navItems = [
    { label: 'Accueil',     anchor: 'hero' },
    { label: 'À propos',    anchor: 'about' },
    { label: 'Compétences', anchor: 'skills' },
    { label: 'Parcours',    anchor: 'experience' },
    { label: 'Projets',     anchor: 'projects' },
    { label: 'Contact',     anchor: 'contact' },
  ];

  stack = ['Angular', 'Spring Boot', 'Flutter', 'Laravel', 'PostgreSQL', 'PrimeNG', 'Figma'];

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
