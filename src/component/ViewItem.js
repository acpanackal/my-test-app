import React, { Component } from "react";
import { Link } from "react-router-dom";

class ViewItem extends Component {
  render() {
    return (
      <>
        <h1>{this.props.itemObject.title}</h1>
        <p className="itemDescription">{this.props.itemObject.text}</p>
        <Link className="link-list-item" to={`/`}>
          Back
        </Link>
      </>
    );
  }
}

export default ViewItem;
