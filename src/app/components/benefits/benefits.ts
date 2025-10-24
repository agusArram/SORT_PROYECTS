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
      title: 'Para Negocios que Buscan Crecer',
      description: 'Análisis de rentabilidad real para tomar decisiones basadas en datos, no en intuición.',
      icon: '📈'
    }
  ];
}
