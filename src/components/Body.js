import React from "react";
import { Grid, Segment, Container } from "semantic-ui-react";
import Styles from "../pages/App.css";
import Img from "../assets/Story/Ellipse 84(1).png";
import Img2 from "../assets/Story/Ellipse 84(10).png";
import Img3 from "../assets/Story/Ellipse 84(11).png";
import Img4 from "../assets/Story/Ellipse 84(12).png";
import Img5 from "../assets/Story/Ellipse 84(2).png";
import Img6 from "../assets/Story/Ellipse 84(3).png";
import Img7 from "../assets/Story/Ellipse 84(4).png";
import Img8 from "../assets/Story/Ellipse 84(5).png";

const Body = () => {
  return (
    <div>
      <Grid columns={2} stackable>
        <Grid.Column width={11}>
          <Segment>
            <h3 className={Styles.pStory}>Story</h3>
            <Container>
              <Grid>
                <Grid.Row>
                  <Grid.Column />
                  <div className={Styles.mrstory}>
                    <img className={Styles.story} src={Img} alt="Covid-19" />
                    <p>Marilyn </p>
                  </div>
                  <Grid.Column />
                  <div>
                    <img className={Styles.story} src={Img2} alt="Covid-19" />
                    <p>Lydia </p>
                  </div>
                  <Grid.Column />
                  <div>
                    <img className={Styles.story} src={Img3} alt="Covid-19" />
                    <p>Ahmad </p>
                  </div>
                  <Grid.Column />
                  <div>
                    <img className={Styles.story} src={Img4} alt="Covid-19" />
                    <p>Jaylon</p>
                  </div>
                  <Grid.Column />
                  <div>
                    <img className={Styles.story} src={Img5} alt="Covid-19" />
                    <p>Ashlynn </p>
                  </div>
                  <Grid.Column />
                  <div>
                    <img className={Styles.story} src={Img6} alt="Covid-19" />
                    <p>Skylar </p>
                  </div>
                  <Grid.Column />
                  <div>
                    <img className={Styles.story} src={Img7} alt="Covid-19" />
                    <p>Skylar</p>
                  </div>
                  <Grid.Column />
                  <div>
                    <img className={Styles.story} src={Img8} alt="Covid-19" />
                    <p>Skylar </p>
                  </div>
                  <Grid.Column />
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
          <Segment>
            <h4>Statistic</h4>
          </Segment>
        </Grid.Column>
        <Grid.Column width={5}>
          <Segment>
            <div>
              <h4>Peringkat</h4>
              <Grid columns={2} stackable>
                <Grid.Column width={12}>satu</Grid.Column>
                <Grid.Column width={12}>satu</Grid.Column>
                <Grid.Column width={12}>satu</Grid.Column>
                <Grid.Column width={12}>satu</Grid.Column>
                <Grid.Column width={12}>satu</Grid.Column>
              </Grid>
            </div>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Body;
