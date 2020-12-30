import React, { Component } from "react";
import ViewItem from "../component/ViewItem";

class ItemListPage extends Component {
  constructor(props) {
    super(props);
    this.state = { imageList: [], imageItem: [] };
    this.FetchData();
  }
  FetchData() {
    fetch("https://backend.neue-gruppe.com/seminars")
      .then((response) => {
        if (response.status === 200) {
          console.log("SUCCESSS");
          return response.json();
        } else if (response.status === 408) {
          console.log("SOMETHING WENT WRONG");
          this.setState({ requestFailed: true });
        }
      })
      .then((data) => this.setState({ imageList: data }))
      .then(() => {
        const itemId = this.props.match.params.id;
        var selectedItem = this.state.imageList.find(
          (selectedItem) => selectedItem.id === itemId
        );
        this.setState({ imageItem: selectedItem });
      });
  }

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <ViewItem itemObject={this.state.imageItem} />
          </header>
        </div>
      </>
    );
  }
}

export default ItemListPage;
