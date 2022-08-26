import React, { Component } from "react";
import Isotope from "isotope-layout/js/isotope";
import ImagesLoaded from "imagesloaded/imagesloaded";

import Portfolio2griditem from "./Portfolio2griditem";
import { portfolio_list } from "../../constants/Conts";

class Portfoliogrid extends Component {
  state = {
    activeItem: "*",
  };

  componentDidMount() {
    var imgLoad = new ImagesLoaded("#work-portfolio");

    imgLoad.on("progress", function (instance, image) {
      this.iso = new Isotope("#work-portfolio", {
        itemSelector: ".portfolio_item",
        layoutMode: "masonry",
      });
    });
  }
  onFilterChange = (newFilter) => {
    this.setState({ activeItem: newFilter });
    if (this.iso === undefined) {
      this.iso = new Isotope("#work-portfolio", {
        itemSelector: ".portfolio_item",
        layoutMode: "masonry",
      });
    }

    // this.iso.arrange({ filter: newFilter });

    if (newFilter === "*") {
      this.iso.arrange({ filter: `*` });
    } else {
      this.iso.arrange({ filter: `.${newFilter}` });
    }
  };

  onActive = (v) => (v === this.state.activeItem ? "active" : "");

  render() {
    return (
      <section className="portfolio_area sec_pad bg_color">
        <div className="container">
          <div className="row portfolio_gallery mb_30" id="work-portfolio">
            {portfolio_list.map((item) => {
              return (
                <Portfolio2griditem
                  colClass={item.colClass}
                  pImg={item.pImg}
                  projectDetails={item.projectDetails}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
export default Portfoliogrid;
