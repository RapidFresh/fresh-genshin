import { Injectable } from '@angular/core';

@Injectable()
export class ElementsService {
  elements: Elements[] = [
    {
      label: 'Anemo',
      image: './assets/img/elements/anemo-color.webp',
    },
    {
      label: 'Cryo',
      image: './assets/img/elements/cryo-color.webp',
    },
    {
      label: 'Dendro',
      image: './assets/img/elements/dendro-color.webp',
    },
    {
      label: 'Electro',
      image: './assets/img/elements/electro-color.webp',
    },
    {
      label: 'Geo',
      image: './assets/img/elements/geo-color.webp',
    },
    {
      label: 'Pyro',
      image: './assets/img/elements/pyro-color.webp',
    },
    {
      label: 'Hydro',
      image: './assets/img/elements/hydro-color.webp',
    },
  ];

  elementsFull: Elements[] = [
    {
      label: 'Anemo',
      image: './assets/img/elements/anemo-color.webp',
      elementalResonance:
        'Decreases Stamina Consumption by 15%.\r\nIncreases Movement SPD by 10%. Shortens Skill CD by 5%.',
      reactions: [
        {
          elements: ['Cryo', 'Electro', 'Pyro', 'Hydro'],
          title: 'Swirl',
          description:
            'Infuses an element and deals that elemental damage while spreading the effect to nearby enemies. It does not deal Anemo damage (as that elemental damage seen comes from the talent that is dealing the Anemo element). Only one element at a time can be infused with Anemo.',
        },
      ],
    },
    {
      label: 'Cryo',
      image: './assets/img/elements/cryo-color.webp',
      elementalDebuff: 'Increases stamina consumption.',
      elementalResonance:
        'Affected by Electro for 40% less time.\r\nIncreases CRIT Rate against enemies that are Frozen or affected by Cryo by 15%.',
    },
    {
      label: 'Dendro',
      image: './assets/img/elements/dendro-color.webp',
    },
    {
      label: 'Electro',
      image: './assets/img/elements/electro-color.webp',
      elementalDebuff: 'Continuously drains Energy Recharge.',
      elementalResonance:
        'Affected by Hydro for 40% less time. Superconduct, Overloaded, and Electro-Charged have a 100% chance to generate an Electro Elemental Particle (CD: 5s).',
    },
    {
      label: 'Geo',
      image: './assets/img/elements/geo-color.webp',
      elementalResonance:
        'Increases resistance to interruption.\r\nWhen protected by a shield, increases Attack DMG by 15%.',
    },
    {
      label: 'Pyro',
      image: './assets/img/elements/pyro-color.webp',
      elementalDebuff: 'Continuously inflicts damage over time.',
      elementalResonance:
        'Affected by Cryo for 40% less time.\r\nIncreases ATK by 25%.',
    },
    {
      label: 'Hydro',
      image: './assets/img/elements/hydro-color.webp',
      elementalDebuff: 'Increases skill CD durations.',
      elementalResonance:
        'Affected by Pyro for 40% less time.\r\nIncreases incoming healing by 30%.',
    },
  ];

  constructor() {}
}

export interface Elements {
  label: string;
  image: string;
  reactions?: ElementReaction[];
  statusEffect?: string;
  elementalDebuff?: string;
  elementalResonance?: string;
}

export interface ElementReaction {
  title: string;
  elements: string[];
  description: string;
}
