import React from "react";
import SHOP_DATA from "./shop.data";
import Collection from "../../components/collection/collection.component";

class ShopPage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <Collection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
