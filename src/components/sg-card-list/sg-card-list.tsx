import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'sg-card-list',
})
export class SgCardList {

  @State() items: Array<any> = [];

  render() {
    return (
      <div>
        {this.items.map(item => (
          <sg-card
            cardTitle={item.title}
            time={item.time}
            speakers={item.speakers} />
        ))}
      </div>
    );
  }

  getDataAndModifyState() {
    // This data will come from an enternal API later!
    const data = [
      {
        title: 'Taller: Creación de Componentes Web re-usables con StencilJS (compatibles con React Vue y Angular)',
        time: '12:00 - 13:30',
        speakers: ['Alex Arriaga'],
      },
      {
        title: 'Aplicando principios SOLID en Javascript gracias a Typescript',
        time: '13:30 - 14:15',
        speakers: ['Leonardo Micheloni'],
      },
    ];

    this.items = data;
  }

  componentWillLoad() {
    this.getDataAndModifyState();
  }
}

