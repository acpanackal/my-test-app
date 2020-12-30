import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Moment from "moment";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = { imageList: [] };
    this.FetchData();
  }
  FetchData() {
    fetch("https://backend.neue-gruppe.com/seminars")
      .then((response) => response.json())
      .then((data) => this.setState({ imageList: data }));
  }

  createList(imgItem) {
    let imgUrl = "no-image.png";
    if (imgItem.image) {
      imgUrl = "https://backend.neue-gruppe.com" + imgItem.image.url;
    }

    return (
      <div className="card flex-row flex-wrap" key={imgItem.id}>
        <div className="card-header col-lg-4">
          <img src={imgUrl} alt="Not loaded" width="250" height="200"></img>
        </div>
        <div className="card-block px-2 col-lg-8">
          <h5 className="card-title">
            <strong>{imgItem.title}</strong>
          </h5>
          <p className="card-text">
            <i className="fa fa-calendar-o"></i>
            {Moment(imgItem.from).format("llll")}-
            {Moment(imgItem.to).format("llll")}
          </p>
          <Link
            className="link-list-item"
            key={imgItem.id}
            to={`/items/${imgItem._id}`}
          >
            Mehr Erfahren
          </Link>
        </div>
      </div>
    );
  }

  render() {
    var listEntries = this.state.imageList;
    var listItems = listEntries.map(this.createList);
    return (
      <>
        <div>
          <h3 className="seminarTitle">Akuelles Seminar</h3>
          <div className="itemListContainer">
            <div className="cardListGroup">{listItems}</div>
          </div>
        </div>
      </>
    );
  }
}

export default ItemList;
