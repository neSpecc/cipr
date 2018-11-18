import Likely from 'cmtt-likely';
import {
  make
} from './dom';
import * as Analytics from './analytics';

const CSS = {
  likely: 'likely',
  likelyCustom: 'likely--custom',
  state: {
    hidden: 'l-hidden'
  }
};

export const init = () => {
  Likely.initate();
};

/**
 * Make likely buttons and append to specified element
 * @param {Element} parentContainer
 * @param {Array} socials
 */
export const create = (parentContainer, set = {}) => {
  let likelyContainer = make('div', [CSS.likely, CSS.likelyCustom]),
    socials = ['facebook', 'vkontakte', 'twitter'];

  socials.forEach(social => {
    let button = make('div', social);

    if (social === 'facebook') button.textContent = 'Поделиться';

    button.addEventListener('click', () => {
      Analytics.sendEvent(`Share ${social}`);
    });

    likelyContainer.appendChild(button);
  });

  parentContainer.appendChild(likelyContainer);

  if (set.url) likelyContainer.dataset.url = set.url;
  if (set.twitter) likelyContainer.dataset.twitter = set.twitter;

  init();
};