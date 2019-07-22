# react-flexbox-grid

A simple React `flexbox` grid using [styled-components](https://github.com/styled-components/styled-components). 🙌

## Install

Install using your favorite package manager.

```bash
npm install @idix/react-flexbox-grid
```

```bash
yarn add @idix/react-flexbox-grid
```

## Usage

### Basic

The following will generate a grid with **auto-sizing** columns.
```javascript
import Grid from '@idix/react-flexbox-grid';

// Alternatively, you can import each individual component:
// import {Column, Container, Row} from '@idix/react-flexbox-grid'; 

export default () => (
  <Grid.Container>
    <Grid.Row>
      <Grid.Column>Column 1</Grid.Column>
      <Grid.Column>Column 2</Grid.Column>
    </Grid.Row>
  </Grid.Container>
);
```

To set specific sizes on the columns, use the **`span`** prop, and pass in a **fraction**. Passing a fraction allows you to use different grid sizes wherever you want.

```javascript
// ...

export default () => (
  <Grid.Container>
    <Grid.Row>
      <Grid.Column span={4/12}>Column 1</Grid.Column>
      <Grid.Column span={8/12}>Column 2</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column span={1/4}>Column 1</Grid.Column>
      <Grid.Column span={3/4}>Column 2</Grid.Column>
    </Grid.Row>
  </Grid.Container>
);
```

### Responsive

The grid is fluid and responsive. To change layout based on breakpoints, use breakpoint props on a column component. Same as with the `span` prop, the breakpoint props require you to pass in a fraction.

```javascript
// ...

export default () => (
  <Grid.Container>
    <Grid.Row>
      <Grid.Column XS={2/4} SM={1/4} MD={2/8} LG={3/12} XL={2/12}>Column 1</Grid.Column>
      <Grid.Column>Column 2</Grid.Column>
    </Grid.Row>
  </Grid.Container>
);
```