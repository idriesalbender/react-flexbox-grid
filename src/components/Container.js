import { BREAKPOINT_LABELS } from '../settings/breakpoints';
import Media from '../helpers/mediaQueries';
import { borderBox } from '../helpers/cssPresets';
import gutters from '../settings/gutters';
import styled from 'styled-components';
import { toRem } from '../helpers/unitConversion';

export default styled.div`
  display: block;
  width: 100%;
  ${borderBox}
  padding: 0
    ${({ hasPadding }) =>
      (hasPadding && toRem(gutters.SMALL * 2)) || toRem(gutters.SMALL)};

  ${Media(BREAKPOINT_LABELS.MD)`
    padding: 0
    ${({ hasPadding }) =>
      (hasPadding && toRem(gutters.LARGE * 2)) || toRem(gutters.LARGE)};
  `}
`;
