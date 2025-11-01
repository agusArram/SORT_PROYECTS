import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-product-showcase',
  standalone: true,
  imports: [CommonModule, YouTubePlayerModule],
  templateUrl: './product-showcase.html',
  styleUrls: ['./product-showcase.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductShowcaseComponent {

  fotosProducto = [
    'assets/App/Menu.webp',
    'assets/App/InventoryView.webp',
    'assets/App/InventoryViewCarrito.webp',
    'assets/App/InventoryViewVenta.webp',
    'assets/App/Config.webp',
    'assets/App/Sells.webp',
    'assets/App/MosrtSells.webp',
    'assets/App/Dashboard.webp',
    'assets/App/DashboardGraph.webp',
    'assets/App/Rentabilidad.webp',
  ];

  // Variables de estado para el Lightbox
  isLightboxOpen: boolean = false;
  initialSlideIndex: number = 0;

  /**
   * Abre la galería Lightbox en una imagen específica
   */
  openImage(index: number): void {
    this.initialSlideIndex = index;
    this.isLightboxOpen = true;
  }

  /**
   * Cierra el lightbox (Usado por el botón 'X')
   */
  closeImage(): void {
    this.isLightboxOpen = false;
  }

  /**
   * --- FUNCIÓN CLAVE ---
   * Cierra el lightbox SÓLO si se clickea el fondo gris (el overlay),
   * y no un hijo (como la imagen o el swiper).
   */
  checkOverlayClick(event: MouseEvent): void {
    // Comprueba si el elemento clickeado es el overlay mismo
    if (event.target === event.currentTarget) {
      this.isLightboxOpen = false;
    }
  }
}
