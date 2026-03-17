import { Component } from '@angular/core';

@Component({
  selector: 'app-lettre-motivation',
  template: `
    <section class="lettre" id="lettre">
      <div class="container">
        <div class="section-header fade-in-up">
          <div class="section-badge"><i class="pi pi-file-pdf"></i>Lettre de Motivation</div>
          <h2>Ma Lettre de <span>Motivation</span></h2>
          <p>Une lettre rédigée avec soin, disponible en téléchargement PDF haute qualité.</p>
        </div>

        <div class="lettre-wrapper fade-in-up">
          <!-- Preview Card -->
          <div class="lettre-preview">
            <div class="preview-header">
              <div class="preview-label">
                <i class="pi pi-eye"></i>
                Aperçu de la lettre
              </div>
              <button class="btn-primary download-btn" (click)="downloadPDF()">
                <i class="pi pi-download"></i>
                Télécharger en PDF
              </button>
            </div>

            <!-- Lettre Document -->
            <div class="lettre-doc" id="lettre-doc">
              <!-- Header accent -->
              <div class="doc-accent-top"></div>

              <div class="doc-inner">
                <!-- Sender -->
                <div class="doc-sender">
                  <div class="sender-info">
                    <div class="sender-avatar">FA</div>
                    <div>
                      <h2 class="sender-name">Yao Jean Francis Amani</h2>
                      <p class="sender-title">Développeur Full-Stack | Tech Lead</p>
                      <div class="sender-contacts">
                        <span><i class="pi pi-envelope"></i> francisamany@outlook.com</span>
                        <span><i class="pi pi-phone"></i> 07 79 72 93 39</span>
                        <span><i class="pi pi-map-marker"></i> Riviera Bonoumin, Abidjan</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="doc-divider"></div>

                <!-- Date & Destinataire -->
                <div class="doc-meta-row">
                  <div class="doc-date">Abidjan, le {{ today }}</div>
                  <div class="doc-recipient">
                    <strong>À l'attention de la Direction des Ressources Humaines</strong>
                  </div>
                </div>

                <h3 class="doc-object">
                  <strong>Objet :</strong> Candidature au poste de Développeur Full-Stack / Tech Lead
                </h3>

                <!-- Body -->
                <div class="doc-body">
                  <p class="doc-salutation">Madame, Monsieur,</p>

                  <p>
                    Développeur Full-Stack passionné avec plus de <strong>3 ans d'expérience</strong>, 
                    dont 2 ans en tant que <strong>Tech Lead</strong> au sein de <strong>Tornixtech</strong>, 
                    je me permets de vous soumettre ma candidature avec enthousiasme et conviction.
                  </p>

                  <p>
                    Au cours de mon parcours, j'ai eu l'opportunité de concevoir et de livrer des 
                    produits numériques à fort impact en Côte d'Ivoire et en Afrique : 
                    <strong>CashDash</strong> (transfert d'argent), <strong>Keletick</strong> 
                    (billetterie événementielle), <strong>FlotyshHub</strong> (gestion de flotte), 
                    <strong>OnixMail</strong> (email hosting local) et <strong>FlowHub</strong> 
                    (paiements B2B). Aujourd'hui, je contribue activement au développement de 
                    <strong>Snedai Visa</strong> chez <strong>Eburtis</strong>, une plateforme 
                    de pré-enrôlement au visa ivoirien.
                  </p>

                  <p>
                    Maîtrisant des technologies telles qu'<strong>Angular</strong>, <strong>Spring Boot</strong>, 
                    <strong>Flutter</strong>, <strong>Laravel</strong> et les bases de données 
                    relationnelles (<strong>PostgreSQL, MySQL</strong>), je suis capable de 
                    prendre en charge des projets de leur conception jusqu'à leur déploiement. 
                    Mon intérêt pour le design UI/UX avec <strong>Figma</strong> me permet 
                    également de livrer des interfaces modernes et intuitives.
                  </p>

                  <p>
                    Rigoureux, autonome et naturellement orienté vers le travail en équipe, 
                    je m'adapte rapidement à de nouveaux environnements techniques. Ma 
                    formation en Génie Logiciel et ma certification UI/UX en cours (Coursera) 
                    témoignent de mon désir d'apprentissage continu.
                  </p>

                  <p>
                    Convaincu que mon profil peut apporter une réelle valeur ajoutée à votre 
                    organisation, je serais ravi d'échanger avec vous lors d'un entretien afin 
                    de vous présenter ma vision et mes réalisations.
                  </p>

                  <p class="doc-closing">
                    Dans l'attente de votre retour, je vous prie d'agréer, Madame, Monsieur, 
                    l'expression de mes respectueuses salutations.
                  </p>
                </div>

                <!-- Signature -->
                <div class="doc-signature">
                  <div class="sig-line"></div>
                  <p class="sig-name">Yao Jean Francis Amani</p>
                  <p class="sig-role">Développeur Full-Stack</p>
                </div>
              </div>

              <!-- Bottom accent -->
              <div class="doc-accent-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./lettre-motivation.component.scss']
})
export class LettreMotivationComponent {
  today: string;

  constructor() {
    const d = new Date();
    const months = ['janvier','février','mars','avril','mai','juin',
                    'juillet','août','septembre','octobre','novembre','décembre'];
    this.today = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  downloadPDF(): void {
    // Use print dialog with CSS @media print
    const style = document.createElement('style');
    style.id = 'print-style-tmp';
    style.innerHTML = `
      @media print {
        body > * { display: none !important; }
        app-root > * { display: none !important; }
        .lettre-doc { display: block !important; position: fixed !important; top: 0; left: 0;
          width: 210mm; min-height: 297mm; z-index: 99999 !important; background: white !important; }
        .doc-accent-top, .doc-accent-bottom { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      }
    `;
    document.head.appendChild(style);
    window.print();
    setTimeout(() => document.getElementById('print-style-tmp')?.remove(), 2000);
  }
}
