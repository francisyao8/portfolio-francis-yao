import { Component } from "@angular/core";

interface SkillGroup {
  category: string;
  icon: string;
  color: string;
  skills: { name: string; level: number }[];
}

@Component({
  selector: "app-skills",
  template: `
    <section class="skills" id="skills">
      <div class="container">
        <div class="section-header fade-in-up">
          <div class="section-badge"><i class="pi pi-code"></i>Compétences</div>
          <h2>Mon <span>Arsenal</span> Technique</h2>
          <p>
            Des technologies modernes pour construire des solutions robustes et
            scalables.
          </p>
        </div>

        <div class="skills-grid">
          <div
            class="skill-group card fade-in-up"
            *ngFor="let group of skillGroups"
          >
            <div class="group-header">
              <div class="group-icon" [style.background]="group.color">
                <i class="pi {{ group.icon }}"></i>
              </div>
              <h3>{{ group.category }}</h3>
            </div>

            <div class="skills-list">
              <div class="skill-item" *ngFor="let skill of group.skills">
                <div class="skill-top">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-pct">{{ skill.level }}%</span>
                </div>
                <p-progressBar
                  [value]="skill.level"
                  [showValue]="false"
                ></p-progressBar>
              </div>
            </div>
          </div>
        </div>

        <!-- Tech Chips -->
        <div class="tech-chips fade-in-up">
          <div class="chips-title">
            <i class="pi pi-sparkles"></i>
            Outils & Technologies
          </div>
          <div class="chips-wrap">
            <p-chip *ngFor="let tech of techChips" [label]="tech"></p-chip>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    {
      category: "Langages",
      icon: "pi-code",
      color: "linear-gradient(135deg,#0f1f5c,#2a449e)",
      skills: [
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "Python", level: 80 },
        { name: "Java", level: 70 },
        { name: "PHP", level: 40 },
      ],
    },
    {
      category: "Front-End",
      icon: "pi-desktop",
      color: "linear-gradient(135deg,#f26e23,#ff5a00)",
      skills: [
        { name: "Angular + PrimeNG", level: 92 },
        { name: "HTML5 / CSS3 / SCSS", level: 95 },
        { name: "Flutter / Ionic", level: 80 },
      ],
    },
    {
      category: "Back-End",
      icon: "pi-server",
      color: "linear-gradient(135deg,#1f3478,#0f1f5c)",
      skills: [
        { name: "Spring Boot", level: 70 },
        { name: "Laravel", level: 40 },
        { name: "Flask (Python)", level: 80 },
        { name: "API REST / JWT", level: 88 },
      ],
    },
    {
      category: "Bases de données",
      icon: "pi-database",
      color: "linear-gradient(135deg,#ff5a00,#f26e23)",
      skills: [
        { name: "MySQL / MariaDB", level: 80 },
        { name: "PostgreSQL", level: 80 },
        { name: "SQLite", level: 65 },
      ],
    },
    {
      category: "UI/UX & Design",
      icon: "pi-palette",
      color: "linear-gradient(135deg,#2a449e,#1f3478)",
      skills: [
        { name: "Figma", level: 82 },
        { name: "Canva", level: 85 },
        { name: "Design Systems", level: 72 },
      ],
    },
    {
      category: "Sécurité & Autres",
      icon: "pi-shield",
      color: "linear-gradient(135deg,#0f1f5c,#f26e23)",
      skills: [
        { name: "JWT / HTTPS", level: 85 },
        { name: "Linux / CLI", level: 80 },
        { name: "Git / GitHub", level: 88 },
        { name: "Microsoft Office", level: 82 },
      ],
    },
  ];

  techChips = [
    "Angular 16+",
    "PrimeNG",
    "Spring Boot",
    "Laravel",
    "Flutter",
    "Ionic",
    "Git",
    "Figma",
    "PostgreSQL",
    "MySQL",
    "REST API",
    "JWT",
    "SCSS",
    "TypeScript",
    "Python",
    "Linux",
    "Canva",
  ];
}
