import React from "react";
import logo from "../assets/icon/logo.png";
import { Grid, Segment, Search } from "semantic-ui-react";
import styles from "../pages/App.css";
import iconHome from "../assets/icon/Union.png";
import myCourse from "../assets/icon/Subtract.png";
import Dashboard from "../assets/icon/Union.png";
import Chat from "../assets/icon/Subtract(2).png";
import Profile from "../assets/icon/Subtract.png";
import notification from "../assets/icon/Vector.png";

const Navbar = () => {
  return (
    <div>
      <Grid.Column>
        <Grid columns={1} doubling>
          <Grid.Column>
            <Segment>
              <Grid container columns={3} doubling>
                <Grid.Column>
                  <img className={styles.image} src={logo} alt="Covid-19" />
                </Grid.Column>
                <Grid.Column>
                  <Search placeholder={"Search.."} />
                </Grid.Column>
                <Grid.Column>
                  <Grid columns={6} Doubling>
                    <Grid.Column computer={4} mobile={8} tablet={6}>
                      <img mr={2} src={iconHome} alt="Home" />
                      Home
                    </Grid.Column>
                    <Grid.Column computer={4} mobile={8} tablet={6}>
                      <img mr={2} src={myCourse} alt="My Course" />
                      My Course
                    </Grid.Column>
                    <Grid.Column computer={4} mobile={8} tablet={6}>
                      <img mr={2} src={Dashboard} alt="My Dashboard" />
                      Dashboard
                    </Grid.Column>
                    <Grid.Column computer={4} mobile={8} tablet={6}>
                      <img mr={2} src={Chat} alt=" Chat" />
                      Chat
                    </Grid.Column>
                    <Grid.Column computer={4} mobile={8} tablet={6}>
                      <img mr={2} src={notification} alt="Notification" />
                      notification
                    </Grid.Column>
                    <Grid.Column computer={4} mobile={8} tablet={6}>
                      <img mr={2} src={Profile} alt="Profile" />
                      Profile
                    </Grid.Column>
                  </Grid>
                </Grid.Column>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </div>
  );
};

export default Navbar;
