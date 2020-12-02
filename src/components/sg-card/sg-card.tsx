import { Component, h } from '@stencil/core';

@Component({
  tag: 'sg-card',
  styleUrl: 'sg-card.css',
  shadow: false,
})
export class SgCard {

  render() {
    return (
      <div class="sg-card">
        <div class="sg-card__time">12:00 - 13:30</div>
        <div class="sg-card__content">
          <a href="#" class="sg-card__title">
            <h3>Taller: Creación de Componentes Web re-usables con StencilJS (compatibles con React Vue y Angular)</h3>
          </a>
          <h6 class="sg-card__speakers">Por Alex Arriaga</h6>
        </div>
      </div>
    );
  }
}
