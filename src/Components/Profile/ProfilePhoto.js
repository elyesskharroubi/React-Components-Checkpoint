import React, { Component } from "react";
import { Card } from "react-bootstrap";
import profilPic from "../../profile-pic-unsplash.jpg";

export class ProfilePhoto extends Component {
  render() {
    return <Card.Img variant="top" src={profilPic} />;
  }
}

export default ProfilePhoto;
