import { Component } from '@angular/core';

interface Project {
  id: string;
  name: string;
  company: string;
  domain: string;
  type: string;
  description: string;
  logo: string;
  coverImage: string;
  images: string[];
  url?: string;
  tags: string[];
  color: string;
  featured: boolean;
  category: string;
}

@Component({
  selector: 'app-projects',
  template: `
    <section class="projects" id="projects">
      <div class="container">

        <div class="section-header fade-in-up">
          <div class="section-badge"><i class="pi pi-th-large"></i>Projets</div>
          <h2>Produits que j'ai <span>Construits</span></h2>
          <p>Des solutions réelles déployées pour des milliers d'utilisateurs à travers l'Afrique.</p>
        </div>

        <!-- Filter tabs -->
        <div class="filter-tabs fade-in-up">
          <button class="filter-btn" [class.active]="activeFilter==='all'" (click)="setFilter('all')">Tous</button>
          <button class="filter-btn" [class.active]="activeFilter==='web'" (click)="setFilter('web')">Web</button>
          <button class="filter-btn" [class.active]="activeFilter==='mobile'" (click)="setFilter('mobile')">Mobile</button>
          <button class="filter-btn" [class.active]="activeFilter==='fintech'" (click)="setFilter('fintech')">Fintech</button>
          <button class="filter-btn" [class.active]="activeFilter==='design'" (click)="setFilter('design')">Design</button>
          <button class="filter-btn" [class.active]="activeFilter==='perso'" (click)="setFilter('perso')">Personnel</button>
        </div>

        <!-- Grid -->
        <div class="projects-grid">
          <div class="project-card fade-in-up"
               *ngFor="let project of filteredProjects"
               [class.featured]="project.featured"
               (click)="openModal(project)">

            <!-- Image or Logo Banner -->
            <div class="project-img" [style.background]="project.color">
              <img *ngIf="project.coverImage" [src]="project.coverImage"
                   [alt]="project.name" (error)="onImgError($event)" />
              <div *ngIf="!project.coverImage" class="logo-cover">
                <img [src]="project.logo" [alt]="project.name" (error)="onLogoError($event)" />
              </div>
              <div class="project-type-badge">{{ project.type }}</div>
              <div class="hover-overlay">
                <i class="pi pi-eye"></i>
                <span>Voir les détails</span>
              </div>
            </div>

            <!-- Card content -->
            <div class="project-content">
              <div class="project-header">
                <img [src]="project.logo" [alt]="project.name + ' logo'"
                     class="project-logo" (error)="onLogoError($event)" />
                <div>
                  <h3>{{ project.name }}</h3>
                  <span class="project-company">{{ project.company }}</span>
                </div>
              </div>
              <div class="project-domain">
                <i class="pi pi-tag"></i>{{ project.domain }}
              </div>
              <p class="project-desc">{{ project.description }}</p>
              <div class="project-tags">
                <p-chip *ngFor="let tag of project.tags" [label]="tag"></p-chip>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- MODAL -->
    <p-dialog [(visible)]="modalVisible" [modal]="true" [dismissableMask]="true"
              [draggable]="false" [resizable]="false"
              styleClass="project-modal" [style]="{width: '90vw', maxWidth: '1000px'}">

      <ng-container *ngIf="selectedProject">
        <div class="modal-inner">

          <!-- Modal Header -->
          <div class="modal-header-custom" [style.background]="selectedProject.color">
            <div class="modal-header-content">
              <img [src]="selectedProject.logo" [alt]="selectedProject.name"
                   class="modal-logo" (error)="onLogoError($event)" />
              <div>
                <h2>{{ selectedProject.name }}</h2>
                <p>{{ selectedProject.company }} — {{ selectedProject.type }}</p>
              </div>
            </div>
            <div class="modal-type-badge">{{ selectedProject.domain }}</div>
          </div>

          <div class="modal-body">

            <!-- Description -->
            <div class="modal-desc">
              <h4><i class="pi pi-info-circle"></i> À propos du projet</h4>
              <p>{{ selectedProject.description }}</p>
            </div>

            <!-- Tags -->
            <div class="modal-tags">
              <p-chip *ngFor="let tag of selectedProject.tags" [label]="tag"></p-chip>
            </div>

            <!-- Gallery -->
            <ng-container *ngIf="selectedProject.images.length > 0">
              <h4 class="gallery-title"><i class="pi pi-images"></i> Captures d'écran</h4>
              <div class="modal-gallery">
                <div class="gallery-item" *ngFor="let img of selectedProject.images"
                     (click)="openLightbox(img)">
                  <img [src]="img" [alt]="selectedProject.name" (error)="onImgError($event)" />
                  <div class="gallery-zoom"><i class="pi pi-search-plus"></i></div>
                </div>
              </div>
            </ng-container>

            <!-- No images: logo display -->
            <ng-container *ngIf="selectedProject.images.length === 0">
              <div class="no-screenshots">
                <img [src]="selectedProject.logo" [alt]="selectedProject.name"
                     class="no-img-logo" (error)="onLogoError($event)" />
                <p>Captures non disponibles pour ce projet.</p>
              </div>
            </ng-container>

          </div>
        </div>
      </ng-container>
    </p-dialog>

    <!-- Lightbox -->
    <p-dialog [(visible)]="lightboxVisible" [modal]="true" [dismissableMask]="true"
              [draggable]="false" [resizable]="false"
              styleClass="lightbox-modal" [style]="{width: '95vw', maxWidth: '1200px', background:'transparent', boxShadow:'none'}">
      <div class="lightbox-inner" *ngIf="lightboxImg">
        <img [src]="lightboxImg" alt="Zoom" />
      </div>
    </p-dialog>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  activeFilter = 'all';
  modalVisible = false;
  lightboxVisible = false;
  lightboxImg = '';
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      id: 'cashdash',
      name: 'CashDash',
      company: 'Tornixtech',
      domain: 'Fintech — Transfert d\'argent & Paiement',
      type: 'Web & Mobile',
      category: 'web,mobile,fintech',
      description: 'Solution de transfert d\'argent et gestion de paiements. Envoi entre particuliers ou entreprises avec intégration des moyens de paiement locaux (Orange Money, Moov, Wave) et options internationales.',
      logo: 'assets/images/logos/cashdash-logo.jpg',
      coverImage: 'assets/images/projects/cashdash/cashdash-3.png',
      images: Array.from({length: 11}, (_,i) => `assets/images/projects/cashdash/cashdash-${i+1}.png`)
              .concat(['assets/images/projects/cashdash/cashdash-figma.jpg', 'assets/images/projects/cashdash/cashdash-canva.png']),
      url: 'http://www.cashdash.ci',
      tags: ['Angular', 'Python (Flask)', 'Ionic', 'PostgreSQL', 'Fintech'],
      color: 'linear-gradient(135deg,#0f1f5c,#2a449e)',
      featured: true,
    },
    {
      id: 'keletick',
      name: 'Keletick',
      company: 'Tornixtech',
      domain: 'Billetterie événementielle & Marketing culturel',
      type: 'Web & Mobile',
      category: 'web,mobile',
      description: 'Plateforme dédiée à la vente de tickets pour des événements en Côte d\'Ivoire. Les organisateurs publient leurs événements, les utilisateurs réservent et paient leurs billets en toute simplicité.',
      logo: 'assets/images/logos/keletick-logo.png',
      coverImage: 'assets/images/projects/keletick/keletick-4.png',
      images: Array.from({length: 5}, (_,i) => `assets/images/projects/keletick/keletick-${i+1}.png`)
              .concat(['assets/images/projects/keletick/keletick-figma.png', 'assets/images/projects/keletick/keletick-canva.png']),
      url: 'http://www.keletick.ci',
      tags: ['Angular', 'Python (Flask)', 'Ionic', 'MySQL', 'Billetterie'],
      color: 'linear-gradient(135deg,#1a5276,#117a65)',
      featured: true,
    },
    {
      id: 'snedai',
      name: 'Snedai Visa',
      company: 'Eburtis',
      domain: 'Administration numérique — Visa ivoirien',
      type: 'Web',
      category: 'web',
      description: 'Plateforme de pré-enrôlement au visa ivoirien avec espace client de gestion des demandes, documents et réclamations. Interface bilingue (FR/EN), 2400+ clients actifs, 98% de satisfaction.',
      logo: 'assets/images/logos/snedai-logo.png',
      coverImage: 'assets/images/projects/snedai/snedai-1.png',
      images: Array.from({length: 23}, (_,i) => `assets/images/projects/snedai/snedai-${i+1}.png`),
      tags: ['Angular', 'PrimeNG', 'Spring Boot', 'i18n', 'E-gov'],
      color: 'linear-gradient(135deg,#0f1f5c,#f26e23)',
      featured: true,
    },
    {
      id: 'abbi',
      name: 'ABBI (SBEE)',
      company: 'Eburtis',
      domain: 'Analytics & Business Intelligence',
      type: 'Dashboard',
      category: 'web',
      description: 'Tableau de bord analytique pour la Société Béninoise d\'Énergie Électrique (SBEE). KPIs RH, Finance, Commercial et Technique avec visualisations avancées, analyses démographiques et rapports de performance.',
      logo: 'assets/images/logos/eburtis-logo.png',
      coverImage: 'assets/images/projects/abbi/abbi-1.png',
      images: ['assets/images/projects/abbi/abbi-1.png'],
      tags: ['Angular', 'Spring Boot', 'Charts', 'BI', 'Dashboard'],
      color: 'linear-gradient(135deg,#1a237e,#0d47a1)',
      featured: true,
    },
    {
      id: 'flotyshub',
      name: 'FlotyshHub',
      company: 'Tornixtech',
      domain: 'Suivi de flotte & Logistique',
      type: 'Web & Mobile',
      category: 'web,mobile',
      description: 'Gestion de flotte de véhicules intégrant la géolocalisation, le suivi en temps réel, la gestion des alertes et des rapports détaillés de conduite. Idéal pour les entreprises de transport.',
      logo: 'assets/images/logos/flotyshub-logo.jpg',
      coverImage: 'assets/images/projects/flotyshub/flotyshub-3.png',
      images: Array.from({length: 3}, (_,i) => `assets/images/projects/flotyshub/flotyshub-${i+1}.png`),
      url: 'http://www.flotyshub.com',
      tags: ['Angular', 'Python (Flask)', 'Maps API', 'Logistique'],
      color: 'linear-gradient(135deg,#1b4f72,#0e6655)',
      featured: false,
    },
    {
      id: 'flowhub',
      name: 'FlowHub',
      company: 'Tornixtech',
      domain: 'Paiement B2B, Finances, Compliance',
      type: 'Web',
      category: 'web,fintech',
      description: 'Plateforme dédiée à la gestion des transferts et paiements interentreprises. Facilite le traitement des virements réguliers vers les fournisseurs avec outils d\'export comptable.',
      logo: 'assets/images/logos/flowhub-logo.jpg',
      coverImage: 'assets/images/projects/flowhub/flowhub-1.png',
      images: ['assets/images/projects/flowhub/flowhub-1.png', 'assets/images/projects/flowhub/flowhub-2.png'],
      url: 'http://www.flowhubnetwork.com',
      tags: ['Angular', 'Python (Flask)', 'B2B', 'Compliance', 'Fintech'],
      color: 'linear-gradient(135deg,#7d3c98,#1a5276)',
      featured: false,
    },
    {
      id: 'onixmail',
      name: 'OnixMail',
      company: 'Tornixtech',
      domain: 'Communication professionnelle & Email Hosting',
      type: 'Web',
      category: 'web',
      description: 'Hébergement d\'e-mails professionnels avec interface intuitive, gestion de domaines personnalisés, carnet d\'adresses, calendrier intégré et sécurité renforcée. Alternative locale à Google Workspace.',
      logo: 'assets/images/logos/onixmail-logo.jpg',
      coverImage: '',
      images: ['assets/images/projects/onixmail/onixmail-1.png'],
      url: 'http://www.onixmail.com',
      tags: ['Angular', 'Python (Flask)', 'Email', 'SaaS'],
      color: 'linear-gradient(135deg,#2c3e50,#3498db)',
      featured: false,
    },
    // {
    //   id: 'goparadize',
    //   name: 'GoParadize',
    //   company: 'Tornixtech',
    //   domain: 'Services consulaires & Visa',
    //   type: 'Web',
    //   category: 'web',
    //   description: 'Plateforme de gestion et de traitement de demandes de visa. Simplification des démarches administratives pour les usagers et les agents consulaires.',
    //   logo: 'assets/images/logos/monvisa-logo.png',
    //   coverImage: '',
    //   images: [],
    //   tags: ['Angular', 'Spring Boot', 'E-gov'],
    //   color: 'linear-gradient(135deg,#0f1f5c,#1565c0)',
    //   featured: false,
    // },
    {
      id: 'fatali',
      name: 'Fatali',
      company: 'Projet Personnel',
      domain: 'Application mobile — Personnel',
      type: 'Web & Mobile',
      category: 'mobile,perso',
      description: 'Application mobile personnelle développée en Flutter. Projet d\'exploration et de mise en pratique des compétences en développement mobile et design UI/UX.',
      logo: 'assets/images/logos/fatali-logo.jpeg',
      coverImage: '',
      images: [],
      tags: ['Flutter', 'Figma', 'UI/UX', 'Personnel'],
      color: 'linear-gradient(135deg,#b71c1c,#e53935)',
      featured: false,
    },
    {
      id: 'blok',
      name: 'Blok Africa',
      company: 'Design Personnel',
      domain: 'E-commerce & Marketplace — Maquette Figma',
      type: 'Mobile',
      category: 'mobile,design,perso',
      description: 'Maquette Figma d\'une application mobile marketplace pour la vente de matériaux de construction en Afrique. Design moderne avec catalogue produits, panier, favoris et profil utilisateur.',
      logo: 'assets/images/logos/tornixtech-logo.png',
      coverImage: 'assets/images/projects/blok/blok-1.jpg',
      images: ['assets/images/projects/blok/blok-1.jpg'],
      tags: ['Figma', 'UI/UX', 'Mobile Design', 'Marketplace'],
      color: 'linear-gradient(135deg,#1a237e,#f26e23)',
      featured: false,
    },
    {
      id: 'delivery',
      name: 'Delivery App',
      company: 'Design Personnel',
      domain: 'Livraison à domicile — Maquette Figma',
      type: 'Mobile',
      category: 'mobile,design,perso',
      description: 'Maquette Figma d\'une application mobile de livraison à domicile. Interface utilisateur soignée avec suivi de commande en temps réel et gestion des livreurs.',
      logo: 'assets/images/logos/tornixtech-logo.png',
      coverImage: 'assets/images/projects/delivery/delivery-1.jpg',
      images: ['assets/images/projects/delivery/delivery-1.jpg'],
      tags: ['Figma', 'UI/UX', 'Mobile Design', 'Livraison'],
      color: 'linear-gradient(135deg,#e65100,#ff6d00)',
      featured: false,
    },
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter(p => p.category.includes(this.activeFilter));
  }

  setFilter(f: string): void { this.activeFilter = f; }

  openModal(project: Project): void {
    this.selectedProject = project;
    this.modalVisible = true;
  }

  openLightbox(img: string): void {
    this.lightboxImg = img;
    this.lightboxVisible = true;
  }

  onImgError(e: Event): void {
    (e.target as HTMLImageElement).style.opacity = '0';
  }

  onLogoError(e: Event): void {
    const img = e.target as HTMLImageElement;
    img.style.display = 'none';
  }
}
