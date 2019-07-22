import { BREAKPOINTS, BREAKPOINT_LABELS } from '../settings/breakpoints';

import { css } from 'styled-components';
import { toEm } from './unitConversion';

/**
 * @function Media
 * @param ...args
 * @param {string} breakpoint
 * @return {css}
 */
export default breakpoint => (...args) => {
  if (breakpoint in BREAKPOINT_LABELS)
    return css`
      @media (min-width: ${toEm(BREAKPOINTS[breakpoint])}) {
        ${css(...args)}
      }
    `;

  throw new ReferenceError('Invalid breakpoint key provided');
};
