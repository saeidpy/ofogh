import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import AdCardComponent from "../AdCard/AdCardComponent.js";
import { useStyle } from "./InfiniteList.style.js";

export default function InfiniteListComponent(props) {
  const classes = useStyle();
  const { state, setState } = props;

  const items = Array(100).fill(0);
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={() => {}}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      className={classes.root}
    >
      {items.map((item) => (
        <AdCardComponent />
      ))}
    </InfiniteScroll>
  );
}
