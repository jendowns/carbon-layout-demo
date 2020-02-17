import React from "react";
import { render } from "react-dom";
import { Grid, Row, Column } from "carbon-components-react";

import './app.scss';

function DemoContent({ children }) {
  return (
    <div className="inner">
      {children}
    </div>
  );
}

function App() {
  return (
    <Grid fullWidth condensed>
      <Row>
        <Column lg={16}>
          <DemoContent>16 column title</DemoContent>
        </Column>
        <Column md={8} lg={4}>
          <DemoContent>4 column title</DemoContent>
        </Column>
        <Column md={4} lg={8}>
          <DemoContent>8 column title</DemoContent>
        </Column>
        <Column md={4} lg={4}>
          <DemoContent>4 column title</DemoContent>
        </Column>
        <Column md={8} lg={12}>
          <DemoContent>12 column title</DemoContent>
        </Column>
        <Column md={4} lg={2}>
          <DemoContent>2 column title</DemoContent>
        </Column>
        <Column md={4} lg={2}>
          <DemoContent>2 column title</DemoContent>
        </Column>
      </Row>
    </Grid>
  );
}

render(<App />, document.getElementById("root"));
