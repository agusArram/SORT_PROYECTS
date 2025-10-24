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
      name: 'DEMO',
      price: 'Gratis',
      period: 'Prueba inicial',
      description: 'Ideal para probar el sistema antes de comprometerse',
      features: [
        'Hasta 50 productos',
        '1 usuario',
        'Dashboard básico',
        'Productos, ventas y stock',
        'Sin alertas de stock',
        'Soporte limitado',
        'Sin backup automático'
      ],
      cta: 'Probar Gratis'
    },
    {
      name: 'PLAN BASE',
      price: 'USD 40',
      period: '/mes',
      description: 'La herramienta esencial para emprendedores y feriantes',
      features: [
        'Productos y ventas ilimitados',
        '1 usuario',
        'Alertas de stock bajo',
        'Dashboard básico',
        'Clientes y proveedores',
        'Exportación de productos a PDF',
        'Backup manual',
        'Soporte básico'
      ],
      cta: 'Comenzar Ahora',
      popular: true
    },
    {
      name: 'PLAN FULL',
      price: 'USD 70',
      period: '/mes',
      description: 'Para negocios consolidados que requieren análisis detallados',
      features: [
        'Todo lo del Plan Base',
        'Hasta 5 usuarios',
        'Dashboard avanzado con comparativas',
        'Historial de precios',
        'Lista de faltantes/reposición',
        'Reportes automáticos',
        'Exportación completa a PDF',
        'Backup automático',
        'Personalizable (columnas, colores)',
        'Soporte prioritario + mejoras'
      ],
      cta: 'Obtener Full'
    }
  ];
}
