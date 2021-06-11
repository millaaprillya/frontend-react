import React from "react";
import { Grid, Segment } from "semantic-ui-react";
const Footer = () => {
  return (
    <div>
      <Grid.Column>
        <Grid columns={1} doubling stackable>
          <Grid.Column>
            <Segment>Content</Segment>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </div>
  );
};

export default Footer;
