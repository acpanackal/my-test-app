import React, { Component } from "react";
import ItemList from "../component/ItemList";

class ItemPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ItemList />
        </header>
      </div>
    );
  }
}

export default ItemPage;
