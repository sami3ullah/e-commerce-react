import React from "react";
import MenuItem from "../menu-item/menu-item.component";

// CSS stylesheets
import "./directory.component.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageURL: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkURL: "hats",
        },
        {
          title: "jackets",
          imageURL: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkURL: "",
        },
        {
          title: "sneakers",
          imageURL: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkURL: "",
        },
        {
          title: "womens",
          imageURL: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkURL: "",
        },
        {
          title: "mens",
          imageURL: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
