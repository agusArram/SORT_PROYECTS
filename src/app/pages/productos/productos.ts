import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class ProductosComponent {
  readonly producto = {
    nombre: 'AppInventario',
    version: '2.0',
    descripcion: 'Sistema profesional de gestión de inventario con soporte para variantes',
    caracteristicas: [
      {
        titulo: 'Gestión de Variantes Inteligente',
        descripcion: 'Control preciso de productos con múltiples atributos (talle, color, material)',
        icono: '🎨'
      },
      {
        titulo: 'Stock Transaccional',
        descripcion: 'Cada movimiento queda registrado con historial completo de cambios',
        icono: '📦'
      },
      {
        titulo: 'Análisis de Rentabilidad',
        descripcion: 'Calcula automáticamente el margen de ganancia real por producto',
        icono: '💰'
      },
      {
        titulo: 'Ventas Rápidas',
        descripcion: 'Interfaz optimizada para registrar ventas en segundos',
        icono: '⚡'
      },
      {
        titulo: 'Reportes Profesionales',
        descripcion: 'Genera informes en PDF y Excel con un solo clic',
        icono: '📊'
      },
      {
        titulo: 'Backup Automático',
        descripcion: 'Tus datos seguros con respaldos automáticos diarios',
        icono: '🔒'
      }
    ],
    requisitos: {
      sistema: 'Windows 10/11, macOS 10.14+, Linux (Ubuntu 20.04+)',
      memoria: '4 GB RAM mínimo',
      disco: '500 MB espacio disponible',
      otros: 'Java 11 o superior'
    }
  };
}
