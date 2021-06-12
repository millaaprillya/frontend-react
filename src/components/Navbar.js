import React from "react";
import logo from "../assets/icon/logo.png";
import {
  Container,
  Grid,
  Image,
  Menu,
  Segment,
  Search,
} from "semantic-ui-react";

// import styles from "../pages/App.css";
// import iconHome from "../assets/icon/Union.png";
// import myCourse from "../assets/icon/Subtract.png";
// import Dashboard from "../assets/icon/Union.png";
// import Chat from "../assets/icon/Subtract(2).png";
// import Profile from "../assets/icon/Subtract.png";
// import notification from "../assets/icon/Vector.png";

const Navbar = () => {
  return (
    <div>
      <Menu fixed="top">
        <Container>
          <Menu.Item>
            <Image size={3} src={logo} style={{ marginRight: "1.5em" }} />
          </Menu.Item>
          <Menu.Item>
            <Grid.Column>
              <Search placeholder={"Search.."} />
            </Grid.Column>
          </Menu.Item>
        </Container>
      </Menu>

      <Segment
        vertical
        style={{ margin: "3em 0em 0em", padding: "2em 0em" }}
      ></Segment>
    </div>
  );
};

export default Navbar;
