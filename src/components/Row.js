import styled, { css } from 'styled-components';

import { BREAKPOINT_LABELS } from '../settings/breakpoints';
import Column from './Column';
import Media from '../helpers/mediaQueries';
import { borderBox } from '../helpers/cssPresets';
import gutters from '../settings/gutters';
import { toRem } from '../helpers/unitConversion';

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  ${borderBox}

  ${({ noGutter }) => css`
    margin: 0 ${!noGutter && toRem(-gutters.SMALL)};

    ${Media(BREAKPOINT_LABELS.SM)`
      margin: 0 ${!noGutter && toRem(-gutters.LARGE)};
    `}

    & > ${Column} {
      padding: 0;
    }
  `}
`;
