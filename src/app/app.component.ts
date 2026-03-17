import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-lettre-motivation></app-lettre-motivation>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
    <p-scrollTop [threshold]="300" styleClass="scroll-top-btn"></p-scrollTop>
  `,
  styles: [`
    main { overflow: hidden; }

    ::ng-deep .scroll-top-btn {
      background: linear-gradient(135deg, var(--orange), var(--orange-hot)) !important;
      border: none !important;
      box-shadow: var(--shadow-orange) !important;

      .p-scrolltop-icon { color: white !important; }
    }
  `]
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio-francis-amani';

  ngAfterViewInit(): void {
    // Intersection Observer for fade-in-up animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    setTimeout(() => {
      document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    }, 300);
  }
}
