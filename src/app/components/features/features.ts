import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
  benefit: string;
  isStarFeature?: boolean;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.css'
})
export class FeaturesComponent {
  protected readonly features: Feature[] = [
    {
      icon: '📦',
      title: 'Gestión de Inventario Completa',
      description: 'Crea y organiza tus productos con SKU únicos, nombres, descripciones, costos y precios de venta. Agrupa por categorías personalizables para encontrar lo que necesitas en segundos.',
      benefit: 'Organización profesional sin esfuerzo'
    },
    {
      icon: '🎨',
      title: 'Variantes Inteligentes',
      description: '¿Vendes ropa? ¿Calzado? ¿Productos con múltiples versiones? AppInventario permite crear variantes ilimitadas de un producto base (ej: Remera Roja Talle M, Remera Azul Talle L). Cada variante tiene su propio stock, precio y SKU.',
      benefit: 'Control total sobre cada versión de tus productos',
      isStarFeature: true
    },
    {
      icon: '💳',
      title: 'Punto de Venta Integrado',
      description: 'Registra ventas en segundos. Selecciona productos o variantes específicas, calcula totales automáticamente, acepta múltiples medios de pago y asocia ventas a clientes. Todo desde una interfaz intuitiva.',
      benefit: 'Atención más rápida = clientes más felices'
    },
    {
      icon: '⚡',
      title: 'Control de Stock Transaccional',
      description: 'Cuando vendes, el stock se descuenta automáticamente de la variante correcta. ¿Anulaste una venta? El stock se restaura al instante. Olvídate de errores humanos y descuadres de inventario.',
      benefit: 'Integridad de datos garantizada'
    },
    {
      icon: '👥',
      title: 'Base de Datos de Clientes',
      description: 'Guarda información de tus clientes (nombre, DNI, teléfono, email, notas) y consulta el historial completo de compras. Construye relaciones a largo plazo y ofrece un servicio personalizado.',
      benefit: 'CRM integrado sin complicaciones'
    },
    {
      icon: '📊',
      title: 'Dashboard de Métricas en Tiempo Real',
      description: 'Visualiza KPIs clave al instante: valor total de inventario, productos con stock bajo o sin stock, ventas del día y últimos 30 días, promedio de venta diaria, y gráficos de ventas por período y categoría.',
      benefit: 'Sé exactamente cómo va tu negocio, siempre'
    },
    {
      icon: '💰',
      title: 'Análisis de Rentabilidad',
      description: 'La mayoría de sistemas solo rastrean ventas. AppInventario va más allá: calcula tu ganancia real (Precio - Costo), margen promedio (%), y te muestra qué productos y categorías son realmente rentables.',
      benefit: 'Maximiza ganancias, no solo ventas',
      isStarFeature: true
    },
    {
      icon: '📄',
      title: 'Reportes y Exportación Profesional',
      description: 'Genera reportes de inventario y ventas exportables a PDF y Excel con un clic. Ideal para compartir con contadores, socios o simplemente para tu archivo personal.',
      benefit: 'Documentación profesional sin esfuerzo'
    },
    {
      icon: '🔄',
      title: 'Actualizaciones Automáticas',
      description: 'AppInventario incluye un sistema de licencias flexible y un actualizador automático que descarga e instala nuevas versiones sin intervención manual. Mejoras continuas sin interrupciones.',
      benefit: 'Olvídate del mantenimiento técnico'
    }
  ];
}
