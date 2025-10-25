import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits.html',
  styleUrl: './benefits.css'
})
export class BenefitsComponent {
  protected readonly benefits: Benefit[] = [
    {
      title: 'Para Tiendas de Ropa y Calzado',
      description: 'Gestiona talles, colores y modelos sin complicaciones. Cada variante con su propio stock y precio.',
      icon: '👕'
    },
    {
      title: 'Para Comercios de Electrónica',
      description: 'Controla versiones, capacidades y modelos. Precio diferenciado por cada especificación técnica.',
      icon: '📱'
    },
    {
      title: 'Modo Híbrido (Online/Offline)',
      description: 'Nunca pierdas una venta. AppInventario sigue operando de forma local aunque se caiga internet. Tus datos se guardan al instante y se sincronizan con la nube automáticamente cuando recuperas la conexión.',
      icon: '📈'
    }
  ];
}
