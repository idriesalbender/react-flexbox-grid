import Column from './components/Column';
import GlobalStyle from './helpers/GlobalStyle';
import React from 'react';
import ReactDOM from 'react-dom';
import Row from './components/Row';

const APP_ROOT = document.getElementById('app-root');

const App = () => (
  <>
    <GlobalStyle />
    <Row id="row" noGutter>
      <Column>
        <span>Column</span>
      </Column>
      <Column>
        <span>Column</span>
      </Column>
    </Row>
  </>
);

ReactDOM.render(<App />, APP_ROOT);
