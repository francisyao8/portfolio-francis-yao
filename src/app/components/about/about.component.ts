import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section class="about" id="about">
      <div class="container">

        <div class="about-grid">

          <!-- Left: Photo + cards -->
          <div class="about-visual fade-in-up">
            <div class="profile-card">
              <div class="profile-img-wrap">
                <img src="assets/images/francis.png" alt="Francis Amani" />
                <div class="experience-badge">
                  <span class="exp-years">3+</span>
                  <span class="exp-text">ans d'expérience</span>
                </div>
              </div>

              <div class="profile-info-row">
                <div class="info-item" *ngFor="let item of profileInfo">
                  <i class="pi {{ item.icon }}"></i>
                  <div>
                    <span class="info-label">{{ item.label }}</span>
                    <span class="info-val">{{ item.value }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Text -->
          <div class="about-content fade-in-up">
            <div class="section-header">
              <div class="section-badge">
                <i class="pi pi-user"></i>
                À propos de moi
              </div>
              <h2>Développeur passionné<br>par <span>l'innovation digitale</span></h2>
            </div>

            <p class="about-intro">
              Je suis <strong>Yao Jean Francis Amani</strong>, développeur Full-Stack de 26 ans basé à 
              <strong>Riviera Bonoumin, Abidjan</strong>. Mon parcours se focalise sur l'univers du 
              développement web et mobile, les technologies backend et la conception de logiciels.
            </p>

            <p class="about-text">
              Après ma Licence en Génie Logiciel à l'IMT d'Abidjan, j'ai évolué jusqu'au poste 
              de <strong>Tech Lead</strong> chez Tornixtech, où j'ai contribué à la conception et 
              au développement de plusieurs produits innovants déployés en Côte d'Ivoire et au-delà.
              Aujourd'hui, je poursuis cette aventure chez <strong>Eburtis</strong>.
            </p>

            <div class="traits-grid">
              <div class="trait" *ngFor="let t of traits">
                <div class="trait-icon">
                  <i class="pi {{ t.icon }}"></i>
                </div>
                <div>
                  <h4>{{ t.title }}</h4>
                  <p>{{ t.desc }}</p>
                </div>
              </div>
            </div>

            <div class="about-actions">
              <a href="assets/cv/cv_francis_amani.pdf" download class="btn-primary">
                <i class="pi pi-download"></i>
                Télécharger mon CV
              </a>
              <a (click)="scrollTo('contact')" class="btn-outline" style="cursor:pointer">
                <i class="pi pi-envelope"></i>
                Me contacter
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  profileInfo = [
    { icon: 'pi-map-marker', label: 'Localisation', value: 'Abidjan, CI' },
    { icon: 'pi-envelope',   label: 'Email',        value: 'francisamany@outlook.com' },
    { icon: 'pi-phone',      label: 'Téléphone',    value: '07 79 72 93 39' },
    { icon: 'pi-calendar',   label: 'Âge',          value: '26 ans' },
  ];

  traits = [
    { icon: 'pi-code',        title: 'Développement',   desc: 'Full-Stack Angular, Spring Boot, Flutter' },
    { icon: 'pi-palette',     title: 'UI/UX Design',    desc: 'Interfaces modernes avec Figma & Canva' },
    { icon: 'pi-users',       title: 'Leadership',       desc: 'Tech Lead chez Tornixtech 2+ ans' },
    { icon: 'pi-bolt',        title: 'Agilité',          desc: 'Livraison rapide, itérations continues' },
  ];

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
