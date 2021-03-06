import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sg-card',
  styleUrl: 'sg-card.scss',
  shadow: true,
})
export class SgCard {

  @Prop() cardTitle;
  @Prop() time;
  @Prop() speakers;

  hasSpeakers(speakers) {
    return Array.isArray(speakers) && speakers.length > 0;
  }

  render() {
    return (
      <div class="sg-card">
        <div class="sg-card__time">{this.time}</div>
        <div class="sg-card__content">
          <a href="#" class="sg-card__title">
            <h3>{this.cardTitle}</h3>
          </a>
          {this.hasSpeakers(this.speakers) ? <h6 class="sg-card__speakers">Por {this.speakers}</h6> : ''}
        </div>
      </div>
    );
  }
}
