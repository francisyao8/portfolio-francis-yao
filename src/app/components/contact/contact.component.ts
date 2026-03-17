import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="contact" id="contact">
      <div class="container">
        <div class="section-header fade-in-up">
          <div class="section-badge"><i class="pi pi-envelope"></i>Contact</div>
          <h2>Travaillons <span>Ensemble</span></h2>
          <p>Vous avez un projet en tête ? Je suis disponible pour en discuter.</p>
        </div>

        <div class="contact-grid fade-in-up">
          <!-- Left: Info cards -->
          <div class="contact-info">
            <div class="info-card" *ngFor="let item of contactItems">
              <div class="info-icon">
                <i class="pi {{ item.icon }}"></i>
              </div>
              <div>
                <h4>{{ item.label }}</h4>
                <p>{{ item.value }}</p>
              </div>
            </div>

            <div class="social-row">
              <a *ngFor="let s of socials" [href]="s.url" target="_blank" class="social-btn" [pTooltip]="s.label">
                <i class="pi {{ s.icon }}"></i>
              </a>
            </div>

            <!-- Download CTA -->
            <div class="cta-box">
              <div class="cta-icon"><i class="pi pi-file-pdf"></i></div>
              <div class="cta-text">
                <h4>Télécharger mon CV</h4>
                <p>Version complète en PDF</p>
              </div>
              <a href="assets/cv/cv_francis_amani.pdf" download class="btn-primary">
                <i class="pi pi-download"></i>
              </a>
            </div>
          </div>

          <!-- Right: Form -->
          <div class="contact-form card">
            <h3>Envoyer un message</h3>
            <p class="form-sub">Je réponds généralement sous 24h.</p>

            <div class="form-group">
              <label>Nom complet</label>
              <span class="p-input-icon-left">
                <i class="pi pi-user"></i>
                <input type="text" pInputText [(ngModel)]="form.name" placeholder="Votre nom" />
              </span>
            </div>

            <div class="form-group">
              <label>Email</label>
              <span class="p-input-icon-left">
                <i class="pi pi-envelope"></i>
                <input type="email" pInputText [(ngModel)]="form.email" placeholder="votre@email.com" />
              </span>
            </div>

            <div class="form-group">
              <label>Sujet</label>
              <span class="p-input-icon-left">
                <i class="pi pi-tag"></i>
                <input type="text" pInputText [(ngModel)]="form.subject" placeholder="Sujet de votre message" />
              </span>
            </div>

            <div class="form-group">
              <label>Message</label>
              <textarea pInputTextarea [(ngModel)]="form.message" rows="5"
                        placeholder="Décrivez votre projet ou votre demande..."
                        [autoResize]="true"></textarea>
            </div>

            <button class="btn-primary submit-btn" (click)="sendMessage()">
              <i class="pi pi-send"></i>
              Envoyer le message
            </button>

            <p class="mailto-hint" *ngIf="submitted">
              ✅ Merci ! Vous pouvez aussi me contacter directement à
              <a href="mailto:francisamany@outlook.com">francisamany&#64;outlook.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  submitted = false;

  form = { name: '', email: '', subject: '', message: '' };

  contactItems = [
    { icon: 'pi-envelope',   label: 'Email',       value: 'francisamany@outlook.com' },
    { icon: 'pi-phone',      label: 'Téléphone',   value: '07 79 72 93 39 / 01 60 23 08 54' },
    { icon: 'pi-map-marker', label: 'Localisation', value: 'Riviera Bonoumin, Abidjan, CI' },
    { icon: 'pi-clock',      label: 'Disponibilité', value: 'Lun — Ven, 8h — 18h' },
  ];

  socials = [
    { icon: 'pi-linkedin', label: 'LinkedIn', url: '#' },
    { icon: 'pi-github',   label: 'GitHub',   url: '#' },
  ];

  sendMessage(): void {
    const { name, email, subject, message } = this.form;
    if (name && email && message) {
      const mailto = `mailto:francisamany@outlook.com?subject=${encodeURIComponent(subject || 'Contact depuis portfolio')}&body=${encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`)}`;
      window.open(mailto);
      this.submitted = true;
    }
  }
}
