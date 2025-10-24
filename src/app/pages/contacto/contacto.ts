import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class ContactoComponent {
  protected readonly nombre = signal('');
  protected readonly email = signal('');
  protected readonly mensaje = signal('');

  readonly contactInfo = [
    {
      icono: '📧',
      titulo: 'Email',
      valor: 'arrambide.agustin@gmail.com',
      link: 'mailto:arrambide.agustin@gmail.com'
    },
    {
      icono: '💬',
      titulo: 'WhatsApp',
      valor: '+54 9 11 6254-8659',
      link: 'https://wa.me/5491162548659'
    },
    {
      icono: '💻',
      titulo: 'GitHub',
      valor: '@sortproyects',
      link: 'https://github.com/sortproyects'
    }
  ];

  readonly faqs = [
    {
      pregunta: '¿Cuánto tiempo tarda la respuesta?',
      respuesta: 'Respondemos todas las consultas en un plazo máximo de 24 horas hábiles.'
    },
    {
      pregunta: '¿Ofrecen soporte técnico?',
      respuesta: 'Sí, ofrecemos soporte técnico completo por email y documentación detallada.'
    },
    {
      pregunta: '¿Puedo solicitar nuevas funcionalidades?',
      respuesta: 'Por supuesto! Valoramos mucho el feedback de nuestros usuarios y consideramos todas las sugerencias.'
    }
  ];

  enviarFormulario(): void {
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', {
      nombre: this.nombre(),
      email: this.email(),
      mensaje: this.mensaje()
    });
    alert('Gracias por tu mensaje! Te responderemos pronto.');
    this.resetFormulario();
  }

  resetFormulario(): void {
    this.nombre.set('');
    this.email.set('');
    this.mensaje.set('');
  }
}
