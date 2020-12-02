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
    const apiURL = 'http://localhost:3000/items';

    fetch(apiURL).then(response => response.json()).then(data => {
      this.items = data;
    });
  }

  componentWillLoad() {
    this.getDataAndModifyState();
  }
}

