import { animate, AnimationStyleMetadata, style, transition, trigger } from '@angular/animations';

export const ngIfSlideInAnimation = (transitionTime = '100ms', direction: 'left' | 'right' | 'top' | 'bottom' = 'left') => {

  let visible: AnimationStyleMetadata;
  let hidden: AnimationStyleMetadata;

  switch (direction) {
    case 'left':
    default:
      visible = style({ opacity: 1, transform: `translateX(0%)`, width: '*', visibility: 'visible' });
      hidden = style({ opacity: 0, transform: `translateX(-100%)`, width: '0px', visibility: 'hidden' });
      break;

    case 'right':
      visible = style({ opacity: 1, transform: `translateX(0%)`, visibility: 'visible' });
      hidden = style({ opacity: 0, transform: `translateX(100%)`, visibility: 'hidden' });
      break;

    case 'top':
      visible = style({ opacity: 1, transform: `translateY(0%)`, visibility: 'visible' });
      hidden = style({ opacity: 0, transform: `translateY(-100%)`, visibility: 'hidden' });
      break;

    case 'bottom':
      visible = style({ opacity: 1, transform: `translateY(0%)`, visibility: 'visible' });
      hidden = style({ opacity: 0, transform: `translateY(100%)`, visibility: 'hidden' });
      break;
  }

  const animation = trigger('ngIfSlideIn', [
    transition(':enter', [
      hidden,
      animate(`${transitionTime} ease-out`, visible)
    ]),
    transition(':leave', [
      animate(`${transitionTime} ease-in`, hidden)
    ])
  ]);

  return animation;
}
