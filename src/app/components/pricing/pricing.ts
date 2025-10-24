import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css'
})
export class PricingComponent {
  protected readonly plans: PricingPlan[] = [
    {
      name: 'Demo',
      price: 'Gratis',
      period: 'Prueba sin límites de tiempo',
      description: 'Perfecto para probar todas las funcionalidades',
      features: [
        'Todas las características',
        'Hasta 50 productos',
        'Soporte por email',
        'Actualizaciones incluidas'
      ],
      cta: 'Descargar Demo'
    },
    {
      name: 'Profesional',
      price: '$49',
      period: '/mes',
      description: 'Para negocios que buscan crecer',
      features: [
        'Productos ilimitados',
        'Variantes ilimitadas',
        'Análisis de rentabilidad',
        'Reportes PDF y Excel',
        'Múltiples usuarios',
        'Soporte prioritario',
        'Actualizaciones incluidas'
      ],
      cta: 'Comenzar Ahora',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'A medida',
      period: 'Licencia perpetua',
      description: 'Para empresas con necesidades específicas',
      features: [
        'Todo lo de Profesional',
        'Instalación en servidores propios',
        'Personalización completa',
        'Capacitación del equipo',
        'Soporte 24/7',
        'Integraciones personalizadas'
      ],
      cta: 'Contactar Ventas'
    }
  ];
}
