import { Component, signal, OnInit, effect, Renderer2, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent implements OnInit {
  protected readonly isMenuOpen = signal(false);
  protected readonly isDarkMode = signal(false);

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    // Efecto para aplicar el tema cuando cambia
    effect(() => {
      const theme = this.isDarkMode() ? 'dark' : 'light';
      this.renderer.setAttribute(this.document.documentElement, 'data-theme', theme);
      localStorage.setItem('theme', theme);
    });
  }

  ngOnInit(): void {
    // Cargar preferencia guardada o detectar preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    this.isDarkMode.set(initialTheme === 'dark');
  }

  toggleTheme(): void {
    this.isDarkMode.update(value => !value);
  }

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  scrollToSection(sectionId: string): void {
    this.closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
