import { ComponentFixture, TestBed } from '@angular/core/testing';
// Importa el componente REAL que acabas de renombrar
import { ProductShowcaseComponent } from './product-showcase';

describe('ProductShowcaseComponent', () => { // <--- Nombre actualizado
  let component: ProductShowcaseComponent; // <--- Tipo actualizado
  let fixture: ComponentFixture<ProductShowcaseComponent>; // <--- Tipo actualizado

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importa el componente standalone
      imports: [ProductShowcaseComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductShowcaseComponent); // <--- Componente actualizado
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
