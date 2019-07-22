import styled, { css } from 'styled-components';
import { toPercentage, toRem } from '../helpers/unitConversion';

import { BREAKPOINT_LABELS } from '../settings/breakpoints';
import Media from '../helpers/mediaQueries';
import { borderBox } from '../helpers/cssPresets';
import gutters from '../settings/gutters';

export default styled.div`
  ${borderBox}

  padding: 0 ${toRem(gutters.SMALL)};

  ${Media(BREAKPOINT_LABELS.MD)`
    padding: 0 ${toRem(gutters.LARGE)};
  `}

  ${({ span, XS, SM, MD, LG, XL }) => {
    if (span | XS | SM | MD | LG | XL) {
      return css`
        flex-basis: 0;
        flex-grow: 0;
        flex-basis: ${toPercentage(span || XS)};
        max-width: ${toPercentage(span || XS)};

        ${XS &&
          Media(BREAKPOINT_LABELS.XS)`
          flex-basis: ${toPercentage(XS)};
          max-width: ${toPercentage(XS)};
        `}

        ${SM &&
          Media(BREAKPOINT_LABELS.SM)`
          flex-basis: ${toPercentage(SM)};
          max-width: ${toPercentage(SM)};
        `}

        ${MD &&
          Media(BREAKPOINT_LABELS.MD)`
          flex-basis: ${toPercentage(MD)};
          max-width: ${toPercentage(MD)};
        `}

        ${LG &&
          Media(BREAKPOINT_LABELS.LG)`
          flex-basis: ${toPercentage(LG)};
          max-width: ${toPercentage(LG)};
        `}

        ${XL &&
          Media(BREAKPOINT_LABELS.XL)`
          flex-basis: ${toPercentage(XL)};
          max-width: ${toPercentage(XL)};
        `}
      `;
    }

    return css`
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    `;
  }}
`;
